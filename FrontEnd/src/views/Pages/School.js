import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Star from '../../components/Rating';

const School = () => {
const [listOfSchools, setListOfSchools] = useState([])
const [totalSchools, setTotalSchools] = useState(undefined)

//this use effect makes enables the page to fetch all the schools on mount 
useEffect(() =>{
 
  const getAllSchools = async () => {
    const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools`)
    const allSchools = await response.json();
    const foundSchools =  allSchools.data
    setListOfSchools(foundSchools)
    setTotalSchools(listOfSchools.length)
  }
  getAllSchools()
}, [])

  const deleteSchool = async (schoolId) =>{
    const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${schoolId}`,{
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const deletedSchool = await response.json()
  }

  const schoolNamesMapped = listOfSchools.map((school, key) => {
    return(
    <div className="card" key={key} >
    <div className="school-content row-auto">
      <h1>
        <Link to={`/show-page/${school.id}`}>{school.name}</Link>
      </h1>
      <Star id={school.id} />
      <img
        placeholder="https://placekitten.com/300/300"
      />
      <div className="schoolContent">
     
        <Link to={{
          pathname: `/edit-school-review/${school.id}`,
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
            Edit School
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
            deleteSchool(school.id)
            setTotalSchools(totalSchools - 1)
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
    <body>
    <div className="school">{schoolNamesMapped} </div>
    </body>
  )
};

export default School;
