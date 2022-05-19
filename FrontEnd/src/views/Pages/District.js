import React from "react";
import {Link, Outlet } from 'react-router-dom'


const District = () => {
const data = {name: '', image: '', city: '', state: '', salary: 50}
const handleClick = async (e) => {
  e.preventDefault()
  const response = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
   method: 'DELETE',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
})
const string =  await response.json()
console.log(string)
}
//creating a function to display the data
const createDistrict = () => {
  return (
    <div className="card" style={{marginLeft:'30px'}}>
    <div className="distict-content row-auto">
      <h1>{data.name}</h1>
      <img src={data.image} />
        <p>{data.city}</p>
        <p>{data.state}</p>
        <p>
            {data.salary} Salary
        </p>
        <Link to="/edit-district-review"><button type="submit" style={{marginBottom: '25px', borderRadius: '15px', padding: '10px'}}>Edit District</button></Link>
        <Outlet />
          <button type="submit" onClick={handleClick} style={{marginLeft: '5px', marginBottom: '25px', borderRadius: '15px', padding: '10px'}}>Delete </button>   
    </div>
  </div>
  )
}
  return (
  <div className="districtPage" style={{display:'flex', flexDirection:"row"}}>
      {createDistrict()}
    </div>
  );
};

export default District;
