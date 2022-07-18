import React, {useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from "../Footer"


const Edit = () => {
  const { districtId } = useParams()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [salary, setSalary] = useState(50)
   
    const editDistrict = async () => {
     
     const response = await fetch(`http://back-end-for-grade-school.herokuapp.com/districts/${districtId}`, {
      method: 'PUT',
       mode: 'cors',
       headers: {
           'Content-Type': 'application/json'
       }, 
       body: JSON.stringify({
        "name": name,
        "image": image,
        "city": city,
        "state": state,
        "salary": salary
       })
   })
   const updatedDistrict =  await response.json()
   }
  
    return(
        <body>
<div className='edit-page'>
            <NavBar />
            <h1>Edit District</h1>
            <form className="edit-form">
                <div className='row edit-content'  style={{marginBottom: '25px'}}>
                <label htmlFor='name' style={{marginRight: '25px'}}>District Name</label>
                <input required name='name' id='name' onChange={(e) => setName(e.target.value)} className='form-control' />
                </div>
                <div className=' row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='pic'  style={{marginRight: '25px'}}>District Image</label>
                <input name='pic' id='pic' onChange={(e) => setImage(e.target.value)} className='form-control' />
                </div>
                <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='city'style={{marginRight: '25px'}}>City:</label>
                <input required name='city' id='city' onChange={(e) => setCity(e.target.value)} className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='state' style={{marginRight: '95px'}}>State</label>
                    <input name='state' id='state' onChange={event => setState(event.target.value)} className='form-control' />
                </div>
                <div className="row edit-content" style={{marginBottom: '25px'}}>
                  <label htmlFor="salary" style={{marginRight: '25px'}}>Substitute Salary Per Day</label>
                  <input type='number' min='50' max='10000' required className="form-control" name='salary' id='salary' onChange={(e) => setSalary(parseInt(e.target.value))} />
                </div>
                <input className='editBtn' type='submit' value='Save Changes' 
                onClick={e => {
                   e.preventDefault()
                   editDistrict() 
                }}
                    style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} />
            </form>
            <Footer />
        </div>
        </body>
    )
};

export default Edit;
