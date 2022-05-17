import React from "react";
import {Link, Outlet } from 'react-router-dom'


const District = () => {
    // Looping through the format to create multiple District reviews
// let districtContent = data.DistrictController.map((district) =>{
//     return (
//         <div className="">
//           <h1>
//               <a href={`./districts/${district.id}`}>{district.name}</a>
//           </h1>
//           <img src={district.pic} alt={district.name} />
//           <ul>
//             <p>
//                 Salary: {district.salary}
//             </p>
//           </ul>
//           </div>
//     )
// })
const data = {name: '', image: '', city: '', salary: 50}
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
    <div classNAme="districtPage">
      <div className="district">
        <div className="distict-content">
          <h1>District name</h1>
          <img src="https://placekitten.com/200/300" />
            <p>
                Teacher Salary: 1000 dollars a day
            </p>
            <Link to="/edit-district-review"><button type="submit">Edit Review</button></Link>
            <Outlet />
              <button type="submit" onClick={handleClick}>Delete </button>   
        </div>
      </div>
    </div>
  );
};

export default District;
