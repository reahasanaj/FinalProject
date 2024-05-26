const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;
const clientPath = path.resolve(__dirname, '../client/dist')
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

let tripsData = [];

app.get("/getAllDetails", (req, res)=>{
    res.json({"data":tripsData});
})
app.use(express.static(clientPath))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.post("/registerDetails",(req, res) =>{
    const { data } = req.body;
    if (data) {
        data.id = tripsData.length + 1;
        tripsData.push(data);
        console.log('User Data:', tripsData);
        res.status(200).send({ message: 'Stored successfully' });
    } else {
        res.status(400).send({ message: 'Error in submitting the data' });
    }
}
)

app.delete("/delete/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const indexToDelete = tripsData.findIndex(data => data.id === id);
    if (indexToDelete === -1) {
        return res.status(404).json({ message: 'Record not found' });
    }
    records.splice(indexToDelete, 1);
    res.json({ message: 'Record deleted successfully' });
})