import React from "react";
import { Link, Outlet } from "react-router-dom";
import Star from '../../components/Rating';

const School = () => {
  const data =  {name: "", image: "", district: "", city: "", level: "", state: "", comments: []} ;
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const string = await response.json();
    console.log(string);
  };
  // const [ name, image, city, level, comments ] = data;
  const createSchool = () => {
   return (<div className="card" style={{ marginLeft: "30px" }}>
    <div className="school-content row-auto">
      <h1>
        <Link to="/show-page">{data.name}</Link>
      </h1>
      <img
        src={data.image}
        placeholder="school-picture"
      />
      <div className="schoolContent">
      <Star />
        <p>{data.level} School</p>
        <p>{data.district}</p>
        <p>{data.city}</p>
        <p>{data.state}</p>
        <Link to="/edit-school-review">
          <button
            type="submit"
            style={{
              marginBottom: "25px",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            Edit School
          </button>
        </Link>
        <Outlet />
        <button
          type="submit"
          onClick={handleClick}
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
  </div>)
   }

  return (
    <div
      className="schoolPage"
      style={{ display: "flex", flexDirection: "row" }}
    >
     {createSchool()}
    </div>
  );
};

export default School;
