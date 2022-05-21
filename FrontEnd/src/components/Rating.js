import React, { useEffect, useState } from "react";


const Stars = (props) => {
  // const [stars, setStars] = useState([]) 
  let starNumbersArr = []
  useEffect(() =>{

    const getSchools = async () => {
      const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${props.id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const schoolPopulated = await response.json()
      
      // console.log(schoolPopulated.data.comments)
      schoolPopulated.data.comments.map(comment => starNumbersArr.push(comment.stars))
      console.log(starNumbersArr)
    }
    getSchools()
  }, [])
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
