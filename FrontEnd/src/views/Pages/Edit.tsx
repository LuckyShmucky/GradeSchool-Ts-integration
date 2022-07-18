import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Edit = () => {
  return (
    <div>
      <div className="card">
        {/* <form>
          <label for="school">Select School</label>
          <select name="school" className="schoolList">
            <option
              value="Cesar Chavez Middle School"
            > Cesar Chavez Middle School</option>
            <option
              value="Del Rio Elementary School
              "
            > Del Rio Elementary School
            </option>
            <option
              value="El Camino High School
              "
            > El Camino High School
            </option>
            <option
              value="Foussat Elementary School"
            > Foussat Elementary School</option>
          </select>

          <label for="district">Select District</label>
          <select name="district" className="districtList">
            <option
              value="Oceanside Unified School District"
            > Oceanside Unified School District</option>
            <option
              value="San Diego Unified School District

              "
            > San Diego Unified School District

            </option>
            <option
              value="LA Unified
              "
            > LA Unified
            </option>
            <option
              value="Sweetwater Unified School Distric"
            > Sweetwater Unified School District</option>
          </select>
            
        </form> */}
      </div>
      <div className="">
        <h1>Edit</h1>
        <form method="POST" action="/schools">
          <div className="">
            <label htmlFor="school">Select School</label>
            <select name="school" className="schoolList">
              <option value="Cesar Chavez Middle School">
                Cesar Chavez Middle School
              </option>
              <option
                value="Del Rio Elementary School
              "
              >
                Del Rio Elementary School
              </option>
              <option
                value="El Camino High School
              "
              >
                El Camino High School
              </option>
              <option value="Foussat Elementary School">
                Foussat Elementary School
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="district">Select District</label>
            <select name="district" className="districtList">
              <option value="Oceanside Unified School District">
                Oceanside Unified School District
              </option>
              <option
                value="San Diego Unified School District
              "
              >
                San Diego Unified School District
              </option>
              <option
                value="LA Unified
              "
              >
                LA Unified
              </option>
              <option value="Sweetwater Unified School Distric">
                Sweetwater Unified School District
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" />
          </div>

          <input className="button" type="submit" value="Add a School Review" />
        </form>
      </div>
    </div>
  );
};

export default Edit;
