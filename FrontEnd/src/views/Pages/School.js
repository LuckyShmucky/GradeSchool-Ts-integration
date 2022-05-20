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
    //school is an individual index of the data array
    setTotalSchools(listOfSchools.length)
  }
  getAllSchools()
  // console.log(totalSchools)
}, [])

//console logging state to make sure this persists

  const deleteSchool = async (schoolId) =>{
    const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${schoolId}`,{
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const deletedSchool = await response.json()
    console.log(deletedSchool)
  }


  // console.log(listOfSchools, 'this is the log for list of schools outside useEffect')
  const schoolNamesMapped = listOfSchools.map((school, key) => {
    // console.log(school.id)
    return(
      <div className="card" key={key} style={{ marginLeft: "30px" }}>
    <div className="school-content row-auto">
      <h1>
        <Link to="/show-page">{school.name}</Link>
      </h1>
      <img
        // src={data.image}
        placeholder="school-picture"
      />
      <div className="schoolContent">
      <Star id={school.id} />
     
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
            onClick={() =>{
              // console.log(school.id)
             
            }}
          >
            Edit School
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
    <div>{schoolNamesMapped} </div>
  )
};

export default School;
// Creating a function and passing the data 
  // const createSchool = () => {
  //  return (
  //  <div className="card" style={{ marginLeft: "30px" }}>
  //   <div className="school-content row-auto">
  //     <h1>
  //       {/* <Link to="/show-page">{data.name}</Link> */}
  //     </h1>
  //     <img
  //       // src={data.image}
  //       placeholder="school-picture"
  //     />
  //     <div className="schoolContent">
  //     {/* <Star /> */}
  //       {/* <p>{data.level} School</p> */}
  //       {/* <p>{data.district}</p> */}
  //       {/* <p>{data.city}</p> */}
  //       {/* <p>{data.state}</p> */}
  //       <Link to="/edit-school-review">
  //         <button
  //           type="submit"
  //           style={{
  //             marginBottom: "25px",
  //             borderRadius: "15px",
  //             padding: "10px",
  //           }}
  //         >
  //           Edit School
  //         </button>
  //       </Link>
  //       <Outlet />
  //       <button
  //         type="submit"
  //         // onClick={handleClick}
  //         style={{
  //           marginLeft: "5px",
  //           marginBottom: "25px",
  //           borderRadius: "15px",
  //           padding: "10px",
  //         }}
  //       >
  //         Delete
  //       </button>
  //     </div>
  //   </div>
  // </div>)
  //  }