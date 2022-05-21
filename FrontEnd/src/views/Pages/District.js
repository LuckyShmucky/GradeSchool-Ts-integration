import { list } from "postcss";
import React, {useState, useEffect} from "react";
import {Link, Outlet } from 'react-router-dom';
import Star from '../../components/Rating'

const District = () => {
const [listOfDistricts, setListOfDistricts] = useState([])
const [totalDistricts, setTotalDistricts] = useState(undefined)
//this use effect makes enables the page to fetch all the schools on mount 
useEffect(() =>{ 

  const getAllDistricts = async () => {
    const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts`)
    const allDistricts = await response.json();
    const foundDistricts =  allDistricts.data
    setListOfDistricts(foundDistricts)
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
}
  const districtNamesMapped = listOfDistricts.map((district, key) => {
    return(
    <div className="card" key={key} >
    <div className="district-content" >
      <h1>
        <Link to={`/district-show-page/${district.id}`}>{district.name}</Link>
      </h1>
      <Star id={district.id}/>
      <img
        placeholder="https://placekitten.com/300/300"
      />
     
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
          >
            Edit District
          </button>
        </Link>
        <Outlet />
        <button
          type="submit"
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
       )
      })


  return (
    <body>
      <div className="district">{districtNamesMapped} </div>
    </body>
  )
};

export default District;
