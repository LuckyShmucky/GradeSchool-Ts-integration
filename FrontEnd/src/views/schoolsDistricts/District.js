import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';

const District = () => {
    return (
       
        <div classNAme="districtPage">
            <Navbar />
            <div className="district">
            <div className="card">
                <h1>District name</h1>
                <img src="https://placekitten.com/200/300" />
                <ul>
                    <li>School Name</li>
                    <li>School Name</li>
                    <li>School Name</li>
                    <li>School Name</li>
                </ul>
            </div>

            <div className="card">
                <h1>District name</h1>
                <img src="https://placekitten.com/200/300" />
                <ul>
                    <li>School Name</li>
                    <li>School Name</li>
                    <li>School Name</li>
                    <li>School Name</li>
                  
                </ul>
            </div>

            <div className="card">
                <h1>District name</h1>
                <img src="https://placekitten.com/200/300" />
                <ul>
                    <li><a>School Name</a></li>
                    <li><a>School Name</a></li>
                    <li><a>School Name</a></li>
                    <li><a>School Name</a></li>
                  
                </ul>
            </div>
            </div>
            
        <Footer />
        </div>
    )
}

export default District