import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Star from '../../components/Rating';

const School = () => {
const [listOfSchools, setListOfSchools] = useState([])
const [selectedSchoolId, setSelectedSchoolId] = useState('')
//this use effect makes enables the page to fetch all the schools on mount 
useEffect(() =>{

  const getAllSchools = async () => {
    const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools`)
    const allSchools = await response.json();
    const foundSchools =  allSchools.data
    setListOfSchools(foundSchools)
    //school is an individual index of the data array
    
  }
  getAllSchools()
}, [])

//console logging state to make sure this persists
useEffect(() => {
    console.log(selectedSchoolId)

  }, [selectedSchoolId])

  // console.log(listOfSchools, 'this is the log for list of schools outside useEffect')
  const schoolNamesMapped = listOfSchools.map((school, key) => {
    return(
      <div className="card" key={key} style={{ marginLeft: "30px" }}>
    <div className="school-content row-auto">
  {/* <h1>{school.name}</h1> */}
      <h1>
        <Link to="/show-page">{school.name}</Link>
      </h1>
      <img
        // src={data.image}
        placeholder="school-picture"
      />
      <div className="schoolContent">
      {/* <Star /> */}
        {/* <p>{data.level} School</p> */}
        {/* <p>{data.district}</p> */}
        {/* <p>{data.city}</p> */}
        {/* <p>{data.state}</p> */}
        {/* <Link to="/edit-school-review"> */}
          <button
            type="submit"
            style={{
              marginBottom: "25px",
              borderRadius: "15px",
              padding: "10px",
            }}
            onClick={() =>{
              // console.log(school.id)
              setSelectedSchoolId(school.id)
            }}
          >
            Edit School
          </button>
        {/* </Link> */}
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
        >
          Delete
        </button>
      </div>
    </div>
  </div>
       )
      })

  let schoolCard;
listOfSchools ? schoolCard = 
  <div
  className="schoolPage"
  style={{ display: "flex", flexDirection: "row" }}
>

</div>
 :
  schoolCard =
    <div
      className="schoolPage"
      style={{ display: "flex", flexDirection: "row" }}
    >
    </div>;
  
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