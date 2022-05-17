import React from "react";
import { Link, Outlet } from "react-router-dom";

const School = () => {
  const data = {content: '', author: '', stars: 3}
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  const string =  await response.json()
  console.log(string)
  }

  return (
    <div classNAme="schoolPage">
      <div className="school">
        <div className="card">
          <div classNAme="school-content">
            <h1>
            <Link to="/show-page">Cesar Chavez Middle School</Link>
            </h1>
            <img
              src="https://placekitten.com/200/300"
              placeholder="school-picture"
            />
            <div className="schoolContent">
              <p>star rating 3</p>
              <p>Grade Level: Middle</p>
              <p>Middle School</p>
              <p>District: Oceanside Unified</p>
              <p>City: San diego</p>
              <p>State: CA</p>
              <Link to="/edit-school-review"><button type="submit">Edit School</button></Link>
              <Outlet />
              <button type="submit" onClick={handleClick}>Delete </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
