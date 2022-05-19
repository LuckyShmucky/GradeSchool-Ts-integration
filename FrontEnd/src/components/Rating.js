import React, { useState } from "react";


const Stars = () => {
  //AVERAGE is the default value of every school added to the school page
  const AVERAGE = 3;
  const [value, setValue] = useState(AVERAGE);
  let rating = <div className="inactive">no rating</div>;
  const star = () => {
    let stars = "";
    for (let i = 0; i < value; i++) {
      stars += "⭐️";
    }
    console.log(stars);
    return <h2>Rating: {stars}</h2>;
  };
  return (
  <div>
    {star()}
 </div>
  )
};

export default Stars;
