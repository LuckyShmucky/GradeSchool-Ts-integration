import React, { useState } from "react";
import AddComment from '../AddComment';
import {Link, Outlet, useParams} from 'react-router-dom';
import Star from '../../components/Rating';
import NavBar from "../NavBar";
import Footer from "../Footer";


const Show = () => {

  const schoolParams = useParams()
  interface School {
    name: string,
    image: string,
    level: string,
    district: string,
    city: string,
    state: string,
    comments?: any
  }
  const [school, setSchool] = useState<School>()


  const getSchool = async (): Promise<any> => {
      const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${schoolParams.schoolId}`)
      const mySchool = await response.json();
      const foundSchool =  mySchool.data
      setSchool(foundSchool)
    }
//Delete Event
  const handleDelete = async (e: any):Promise<void> => {
    e.preventDefault()
    const deleteResponse = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/deleteCommets/:${schoolParams.schoolId}`, {
    method: 'DELETE',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  const deleteString =  await deleteResponse.json()
  }
  getSchool()
  
  return (
    <body>
    <div>
          <NavBar />
          <h1>{school?.name}</h1>
          <img src={school?.image} />
          <Star id={schoolParams.schoolId}/>
          <p>{school?.level} School</p>
          <p>{school?.district}</p>
          <p>{school?.city}</p>
          <p>{school?.state}</p>
          <h1>Add Comments</h1>
          {school?.comments?.map((comment: { content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; stars: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <div style={{padding: '10px'}}>{comment.content}    {comment.author}    {comment.stars}           <Link to={{pathname: "/edit-comment"}}><button type="submit" style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Edit Comment</button></Link>
          <Outlet />
          <button type="submit" onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}}>Delete Comment</button></div>)}
          <AddComment id={schoolParams.schoolId}/>
          <Footer />
    </div>
    </body>
  );
};

export default Show;
