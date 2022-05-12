import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';

const School = () => {
    return (
                <div classNAme="schoolPage">
            <Navbar />
            <div className="school">
            <div className="card">
                <h1>School name</h1>
                <img src="https://placekitten.com/200/300" />
                <h2>District name</h2>
                <p>text</p>
            </div>

            <div className="card">
                <h1>School name</h1>
                <img src="https://placekitten.com/200/300" />
                <h2>District name</h2>
                <p>text</p>
            </div>

            <div className="card">
                <h1>School name</h1>
                <img src="https://placekitten.com/200/300" />
                <h2>District name</h2>
                <p>text</p>
            </div>
            </div> 
        <Footer /> 
        </div>
    )
}

export default School