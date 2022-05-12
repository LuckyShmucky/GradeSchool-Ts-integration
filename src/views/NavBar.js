import React from 'react'

function NavBar() {
    return (
        <div className='nav'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/districts">Districts</a></li>
                <li><a href="/schools">Schools</a></li>
                <li><a href="district-form">Add a District</a></li>
                <li><a href="school-form">Add a School</a></li>
            </ul>
            <div className='display'>
            </div>
        </div>
    )
}

export default NavBar