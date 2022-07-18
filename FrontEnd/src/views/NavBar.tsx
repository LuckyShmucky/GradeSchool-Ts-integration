import React from 'react'
import {Link, Outlet} from 'react-router-dom'



function NavBar() {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/districts">Districts</Link></li>
                <li><Link to="/schools">Schools</Link></li>
                <li><Link to="/district-form">Add a District</Link></li>
                <li><Link to="/school-form">Add a School</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default NavBar