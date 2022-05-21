import React, { useState, useEffect } from "react";
import AddComment from '../AddComment';
import {Link, Outlet, useParams} from 'react-router-dom';
import Star from '../../components/Rating';


const ShowDistrict = () => {
    const districtId = useParams()
    useEffect(() =>{

        const getDistrict = async () => {
          const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${districtId}`)
          const myDistrict = await response.json();
          const foundDistrict =  myDistrict.data
          console.log(myDistrict)
        }
        getDistrict()
        // console.log(totalSchools)
      }, [])
  //update event
  const data = {name: '', image: '', city: '', state: '', salary: 50, comments: []};
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:3003/districts/627fdad83ad7a4f38b26c69b`, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
const string =  await response.json()
console.log(string)
}
//Delete Event
const handleDelete = async (e) => {
  e.preventDefault()
  const deleteResponse = await fetch(`http://localhost:3003/districts/627fdad83ad7a4f38b26c69b`, {
   method: 'DELETE',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
})
const deleteString =  await deleteResponse.json()
console.log(deleteString)
}

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} />
      <Star />
      <p>${data.salary}/day</p>
      <p>{data.city}</p>
      <p>{data.state}</p>
      <h1>Add Comments</h1>
      <p>{data.comments}</p>
      <AddComment />
      <Link to="/edit-comment"><button type="submit" onClick={handleClick} style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Edit Comment</button></Link>
      <Outlet />
      <button type="submit" onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Delete Comment</button>
    </div>
  );
};

export default ShowDistrict;