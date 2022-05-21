import React, { useEffect, useState } from "react";


const Stars = (props) => {
  // const [stars, setStars] = useState([]) 
  const [starArr, setStarArr] = useState([]) 
  const initialStarArr = []

  // this runs on mount
  useEffect(() =>{
    //fetching an individual school that is populated by its comments
    const getSchools = async () => {
      const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${props.id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const schoolPopulated = await response.json()
      
     //mapping out all the comments and putting the star number in 
      schoolPopulated.data.comments.map(comment => {
        // console.log(comment.stars)
        initialStarArr.push(comment.stars)
      
        // console.log(starArr)
      })
      setStarArr(initialStarArr)
      // console.log(starNumbersArr, 'stars array for individual card')
    }
    getSchools()
  }, [])
    
  useEffect(() => {
    console.log(starArr)
    let rating = <div className="inactive">no rating</div>;
    // starArr.length > 0 ?
    // console.log('you dont have any stars') :
    // console.log(`you have ${starArr.length} stars`);
  }, [starArr])

  return (
    <div>
    {/* {star()} */}
 </div>
  )
};

export default Stars;

// const star = () => {
//   let stars = "";
//   for (let i = 0; i < props.school; i++) {
//     stars += "⭐️";
//   }
//   // console.log(stars);
//   return <h2>Rating: {stars}</h2>;
// };