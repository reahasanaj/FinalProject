import '../css/trip.css'

function Trip(props){

    

    return(
        <>
           <div id = "main">
                <div id = "submain">
                    <p>Place: </p>
                    <p>{props.detail.place}</p>
                </div>  
                <div id = "submain">
                    <p>Amount: </p>
                    <p>{props.detail.amount}</p>
                </div> 
                <div id = "submain">
                   <p>Start Date: </p>
                   <p>{props.detail.startDate}</p>
                </div>
                 
                <div id = "submain">
                    <p>End Date:</p>
                    <p>{props.detail.endDate}</p>  
                </div>
               
                
           </div>
           
        </>
    )
}

export default Trip