import React, { useEffect, useState } from "react";

interface DStarProp {
  id: any
}


const DistrictStars = (props: DStarProp) => {
  // const [stars, setStars] = useState([]) 
  const [starArr, setStarArr] = useState([]) 
  let initialStarArr: any
const [rating, setRating] = useState('Not yet Rated')
  // this runs on mount
useEffect(() =>{
    //fetching an individual school by an id that is passed by props and is populated by its comments
    const getDistricts = async (): Promise<any> => {
      const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${props.id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const districtPopulated = await response.json()
      console.log(props)
      console.log(districtPopulated)
     //mapping out all the comments and pushing the stars number to initialStarArr
      districtPopulated.data.comments.map((comment: { stars: any; }) => {
        initialStarArr.push(comment.stars)
      })
      //setting state to the array with all the pushed numbers
      setStarArr(initialStarArr)
      
    }
    getDistricts()
    
  }, [])
    
  useEffect(() => {
    console.log(starArr)
      //please see Christian if this is too much to read
    let stars: string = ''

    if(starArr.length >= 1){
      let sum: number = 0;
        // let sumOfRatings = starArr.map(star => {
        //   let sum = 0
        //   sum += star
        //   console.log(sum)
        // })
        for (let i:number = 0; i < starArr.length; i++){
          sum += starArr[i]
        }
        
        let averageRating: number = sum / starArr.length
        // console.log(averageRating)

        //  averageRating.map(star => {
        //    stars += "⭐️";
        //  })
        for (let i:number = 0; i < averageRating; i++){
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

export default DistrictStars;

// const star = () => {
//   let stars = "";
//   for (let i = 0; i < props.school; i++) {
//     stars += "⭐️";
//   }
//   // console.log(stars);
//   return <h2>Rating: {stars}</h2>;
// };