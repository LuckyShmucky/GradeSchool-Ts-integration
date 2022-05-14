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
              <button type="submit">Delete </button>   
        </div>
      </div>
    </div>
  );
};

export default District;
