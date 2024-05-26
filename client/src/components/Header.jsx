import '../css/header.css'

import { Outlet, Link } from 'react-router-dom'

function Header(){
    return (
        <>
           <div id = 'navbar'>
                <p>Trips Expenditure Manager</p>
                <div id = "right-navbar">
                    <Link to ="/"><p>Add Trip</p></Link>
                    <Link to = "/getAllDetails"><p>View All Trips</p> </Link>
                </div>
           </div>
           <Outlet />
        </>
    )
}
export default Header