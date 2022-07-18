import { list } from "postcss";
import React, {useState, useEffect} from "react";
import {Link, Outlet } from 'react-router-dom';
import DistrictStars from "../../components/DistrictRating";
import NavBar from "../NavBar";
import Footer from "../Footer"

const District = () => {
const [listOfDistricts, setListOfDistricts] = useState([])
const [totalDistricts, setTotalDistricts] = useState(0)
//this use effect makes enables the page to fetch all the schools on mount 
useEffect(() =>{ 

  const getAllDistricts = async (): Promise<any> => {
    const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts`)
    const allDistricts = await response.json();
    const foundDistricts =  allDistricts.data
    setListOfDistricts(foundDistricts)
    setTotalDistricts(listOfDistricts.length)
    
  }
  getAllDistricts()
}, [])

const deleteDistrict = async (districtId: string | number): Promise<void> =>{
  const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${districtId}`,{
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const deletedDistrict = await response.json()
}
  const districtNamesMapped = listOfDistricts.map((district: any, key) => {
    return(
    <div className="card" key={key} >
    <div className="district-content" >
      <h1>
        <Link to={`/district-show-page/${district.id}`}>{district.name}</Link>
      </h1>
      <DistrictStars id={district.id}/>
      <img
        placeholder="https://placekitten.com/300/300"
      />
     
        <Link to={{
          pathname: `/edit-district-review/${district.id}`,
          //state: {stateParam: true }
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
      <NavBar />
      <div className="district">{districtNamesMapped} </div>
      <Footer />
    </body>
  )
};

export default District;
