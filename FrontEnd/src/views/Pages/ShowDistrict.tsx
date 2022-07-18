import React, { useState } from "react";
import AddDistrictCommentForm from "../AddDistrictComment";
import {Link, Outlet, useParams} from 'react-router-dom';
import DistrictStars from "../../components/DistrictRating";
import NavBar from "../NavBar";
import Footer from "../Footer"


const ShowDistrict = () => {
    const districtParams = useParams()
    const [district, setDistrict] = useState({
      name: '',
      image: '',
      salary: '',
      city: '',
      state: '',
      comments: []
    })
    const getDistrict = async () => {
          const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${districtParams.districtId}`)
          const myDistrict = await response.json();
          const foundDistrict =  myDistrict.data
          setDistrict(foundDistrict)
        }
    
    //Delete Event
    const handleDelete = async (e:any) => {
    e.preventDefault()
    const deleteResponse = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/deleteCommets/${districtParams.districtId}`, {
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
      <NavBar />
      <h1>{district.name}</h1>
      <img src={district.image} />
      <DistrictStars id={districtParams.districtId}/>
      <p>${district.salary}/day</p>
      <p>{district.city}</p>
      <p>{district.state}</p>
      <h1>Add Comments</h1>
      {district.comments?.map((comment:any) => <div style={{padding: '10px'}}>{comment.content}    {comment.author}    {comment.stars}       <Link to={"/edit-comment"} state={{stateParam: true }}><button type="submit" style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Edit Comment</button></Link>
      <Outlet />
      <button type="submit" onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Delete Comment</button></div>)}
      <AddDistrictCommentForm id={districtParams.districtId}/>
      <Footer />
    </div>
  );
};

export default ShowDistrict;