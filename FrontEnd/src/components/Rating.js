import React, { useState } from "react";


const Stars = (props) => {
  //AVERAGE is the default value of every school added to the school page
  // console.log(props.id)
  const getSchools = async () => {
  const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${props.id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    const schoolPopulated = response.json()

    // console.log(schoolPopulated)
  }
getSchools()
  let rating = <div className="inactive">no rating</div>;
  const star = () => {
    let stars = "";
    for (let i = 0; i < props.school; i++) {
      stars += "⭐️";
    }
    // console.log(stars);
    return <h2>Rating: {stars}</h2>;
  };
  return (
  <div>
    {star()}
 </div>
  )
};

export default Stars;
