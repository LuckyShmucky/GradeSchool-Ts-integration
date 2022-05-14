import React from "react";
import { Link, Outlet } from "react-router-dom";

const School = () => {
  return (
    <div classNAme="schoolPage">
      <div className="school">
        <div className="card">
          <div classNAme="school-content">
            <h1>
              <a src="./Edit">Cesar Chavez Middle School</a>
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

              <Link to="/edit-school-review"><button type="submit">Edit Review</button></Link>
              <Outlet />
              <button type="submit">Delete </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
