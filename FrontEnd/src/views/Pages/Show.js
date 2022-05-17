import React from "react";
import AddComment from '../AddComment';
import {Link, Outlet} from 'react-router-dom';

const Show = () => {
  
  return (
    <div>
      <h1>Schools name</h1>
      <img src="http://placekitten.com/200/300" />
      <p>star rating 3</p>
      <p>Grade Level: Middle</p>
      <p>Middle School</p>
      <p>District: Oceanside Unified</p>
      <p>City: San diego</p>
      <p>State: CA</p>
      <h1>Add Comments</h1>
      <p>Comments Content</p>
      <AddComment />
      <Link to="/edit-comment"><button type="submit">Edit Comment</button></Link>
      <Outlet />
      <button type="submit">Delete Comment</button>
    </div>
  );
};

export default Show;
