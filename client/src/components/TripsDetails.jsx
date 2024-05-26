import  {useEffect, useState} from 'react'
import Trip from './Trip';
import axios from 'axios';
import '../css/tripDetail.css'


function TripDetails(){

    const [backendData, setBackendData] = useState([{}]);
    const [deletedRecordId, setDeletedRecordId] = useState(null);

    useEffect(()=>{
     fetch("/getAllDetails").then(response =>response.json()).then(
       data =>{
        setBackendData(data)
       }
     )
   }, [setDeletedRecordId])
 

   const handleDeleteRecord = async (id) => {
    try {
      await axios.delete('/delete/${id}');
       setDeletedRecordId(id);
    } catch (error) {
      
      console.error('Error deleting record:', error);
    }
  };
   
    return(
        <>
        {(typeof backendData.data == 'undefined')?(<p>No Trips Avaliable</p>):
      (backendData.data.map((tripDetail, i)=>(
      
        <p key={i}>
          <div id ='mainLayout'>
            <Trip detail = {tripDetail}/>
            <div id = "deleteButtonLayout">
              <button id = "delete" onClick={() => handleDeleteRecord(tripDetail.id)}>Delete Record</button>
            </div>
          </div>  
        </p>        
        
     )))}  
        </>
    )
}

export default TripDetails