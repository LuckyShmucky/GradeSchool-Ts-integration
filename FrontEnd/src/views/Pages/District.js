import { list } from "postcss";
import React, {useState, useEffect} from "react";
import {Link, Outlet } from 'react-router-dom';
import Star from '../../components/Rating'

const District = () => {
const [listOfDistricts, setListOfDistricts] = useState([])
const [totalDistricts, setTotalDistricts] = useState(undefined)
const [selectedDistrictId, setSelectedDistrictId] = useState('')
//this use effect makes enables the page to fetch all the schools on mount 
useEffect(() =>{

  const getAllDistricts = async () => {
    const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts`)
    const allDistricts = await response.json();
    const foundDistricts =  allDistricts.data
    setListOfDistricts(foundDistricts)
    //school is an individual index of the data array
    setTotalDistricts(listOfDistricts.length)
    
  }
  getAllDistricts()
}, [])

const deleteDistrict = async (districtId) =>{
  const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${districtId}`,{
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const deletedDistrict = await response.json()
  console.log(deletedDistrict)
}
//console logging state to make sure this persists
/*useEffect(() => {
    console.log(selectedDistrictId, 'current state for id')

  }, [selectedDistrictId])*/

  // console.log(listOfSchools, 'this is the log for list of schools outside useEffect')
  const districtNamesMapped = listOfDistricts.map((district, key) => {
    // console.log(school.id)
    return(
      <div className="card" key={key} style={{ marginLeft: "30px" }}>
    <div className="district-content row-auto">
      <h1>
        <Link to="/district-show-page">{district.name}</Link>
      </h1>
      <Star />
      <img
        // src={data.image}
        placeholder="https://placekitten.com/300/300"
      />
      <div className="districtContent">
      {/* <Star /> */}
     
        <Link to={{
          pathname: `/edit-district-review/${district.id}`,
          state: {stateParam: true }
        }}>
          <button
            type="submit"
            style={{
              marginBottom: "25px",
              borderRadius: "15px",
              padding: "10px",
            }}
            onClick={() =>{
              // console.log(school.id)
              //setSelectedDistrictId(district.id)
            }}
          >
            Edit District
          </button>
        </Link>
        <Outlet />
        <button
          type="submit"
          // onClick={handleClick}
          style={{
            marginLeft: "5px",
            marginBottom: "25px",
            borderRadius: "15px",
            padding: "10px",
          }}
          onClick={e => {
            e.preventDefault()
            deleteDistrict(district.id)
            setTotalDistricts(totalDistricts - 1)
          }
          }
        >
          Delete
        </button>
      </div>
    </div>
  </div>
       )
      })


  return (
    <div>{districtNamesMapped} </div>
  )
};
/*const data = {name: '', image: '', city: '', state: '', salary: 50}
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
  );*/

export default District;
