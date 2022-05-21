import React, { useState, useEffect } from "react";
import AddComment from '../AddComment';
import {Link, Outlet, useParams} from 'react-router-dom';
import Star from '../../components/Rating';


const Show = () => {
  const schoolId = useParams()
  useEffect(() =>{

    const getSchool = async () => {
      const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${schoolId}`)
      const mySchool = await response.json();
      const foundSchool =  mySchool.data
      console.log(mySchool)
    }
    getSchool()
    // console.log(totalSchools)
  }, [])
  //update event
  const data = {name: '', image: '', city: '', level: '', comments: []};
//Delete Event
const handleDelete = async (e) => {
  e.preventDefault()
  const deleteResponse = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
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
    <body>
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} />
      <Star />
      <p>{data.level} School</p>
      <p>{data.district}</p>
      <p>{data.city}</p>
      <p>{data.state}</p>
      <h1>Add Comments</h1>
      <p>{data.comments}</p>
      <AddComment />
      <Link to="/edit-comment"><button type="submit" style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Edit Comment</button></Link>
      <Outlet />
      <button type="submit" onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Delete Comment</button>
    </div>
    </body>
  );
};

export default Show;
