import '../css/form.css'
import { useState } from 'react';

function Form(){
  const [tripDetails, setTripDetails] = useState({place: '',amount: '', startDate: '', endDate: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tripDetails.place == '' || tripDetails.place == null){
      alert("Please fill the place");
      return;
    }
    if(tripDetails.amount == '' || tripDetails.amount == null){
      alert("Please fill the amount");
      return;
    }
    if(tripDetails.startDate == '' || tripDetails.startDate == null){
      alert("Please fill the start date");
      return;
    }
    if(tripDetails.endDate == '' || tripDetails.endDate == null){
      alert("Please fill the end date");
      return;
    }
    register();
    setTripDetails({...tripDetails,place: '', amount: '', startDate: '', endDate: ''});
  };


  const register = async(event)=>{
    const response = await fetch("registerDetails ",{
      method: 'POST',
      headers: 
      {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: tripDetails }),
    });
    if (response.ok) {
      alert('Details stored successfully');
    } 
    else {
      alert('Error storing details');
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({...tripDetails,[name]: value});
  };

    return (
    <>
      <div id = "form">
        <h3>Trip Details</h3>
        <form>
          <label>Place Visited</label>
          <input type='text' name='place' id='place' value={tripDetails.place} onChange ={handleInputChange} placeholder='Enter place you visited' required/>
          <label>Amount Used</label>
          <input type='number' name = 'amount' id='amount' value={tripDetails.amount} onChange ={handleInputChange} placeholder='Enter amount' required/>    
          <label>Start Date</label>
          <input type='date' name = 'startDate' id='startDate'value={tripDetails.startDate} onChange ={handleInputChange} required/>
          <label>End Date</label>
          <input type='date' name = 'endDate' id = 'endDate' value={tripDetails.endDate} onChange ={handleInputChange} required/>
          <div id = "buttonLayout">
              <button id = "submitButton" onClick={handleSubmit}>Submit</button>
          </div>
          
        </form>
      </div>
    </>
    )
}

export default Form