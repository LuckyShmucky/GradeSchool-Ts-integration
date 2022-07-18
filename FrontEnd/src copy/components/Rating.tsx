import React, { useEffect, useState } from "react";


const Stars = (props:any) => {
  // const [stars, setStars] = useState([]) 
  const [starArr, setStarArr] = useState([]) 
  let initialStarArr: any
const [rating, setRating] = useState('Not yet Rated')
  // this runs on mount
useEffect(() =>{
    //fetching an individual school by an id that is passed by props and is populated by its comments
    const getSchools = async () => {
      const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${props.id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const schoolPopulated = await response.json()
      console.log(props)
      console.log(schoolPopulated)
     //mapping out all the comments and pushing the stars number to initialStarArr
      schoolPopulated.data.comments.map(function(comment:any){
        initialStarArr.push(comment.stars)
      })
      //setting state to the array with all the pushed numbers
      setStarArr(initialStarArr)
      
    }
    getSchools()
    
  }, [])
    
  useEffect(() => {
    console.log(starArr)
      //please see Christian if this is too much to read
    let stars = ''

    if(starArr.length >= 1){
      let sum = 0;
        // let sumOfRatings = starArr.map(star => {
        //   let sum = 0
        //   sum += star
        //   console.log(sum)
        // })
        for (let i = 0; i < starArr.length; i++){
          sum += starArr[i]
        }
        
        let averageRating = sum / starArr.length
        // console.log(averageRating)

        //  averageRating.map(star => {
        //    stars += "⭐️";
        //  })
        for (let i = 0; i < averageRating; i++){
          stars += '⭐'
        }
        console.log(stars)
        setRating(stars)
       }
       console.log(stars)
  }, [starArr])

  return (
    <div>
    {/* {star()} */}
    {rating}
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