import React, { useState } from "react";
import AddComment from '../AddComment';
import {Link, Outlet, useParams} from 'react-router-dom';
import Star from '../../components/Rating';


const ShowDistrict = () => {
    const districtParams = useParams()
    const [district, setDistrict] = useState({})
    const getDistrict = async () => {
          const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${districtParams.districtId}`)
          const myDistrict = await response.json();
          const foundDistrict =  myDistrict.data
          setDistrict(foundDistrict)
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
    }
    getDistrict()
  return (
    <div>
      <h1>{district.name}</h1>
      <img src={district.image} />
      <Star />
      <p>${district.salary}/day</p>
      <p>{district.city}</p>
      <p>{district.state}</p>
      <h1>Add Comments</h1>
      {district.comments?.map(comment => <div style={{padding: '10px'}}>{comment.content}    {comment.author}    {comment.stars}</div>)}
      <AddComment />
      <Link to="/edit-comment"><button type="submit" style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Edit Comment</button></Link>
      <Outlet />
      <button type="submit" onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Delete Comment</button>
    </div>
  );
};

export default ShowDistrict;