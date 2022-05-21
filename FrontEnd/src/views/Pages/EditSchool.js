import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const EditSchool = () => {
    const { schoolId } = useParams()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [city, setCity] = useState('')
   
    useEffect(() =>{
        console.log(name, 'school name')
        console.log(image, 'school image')
        console.log(city, 'city ')
    }, [name, city, image])
    console.log(schoolId, 'this is the id for the school')
   // the handle functions need to be updated
    const editSchool = async () => {
     
     const response = await fetch(`http://back-end-for-grade-school.herokuapp.com/schools/${schoolId}`, {
      method: 'PUT',
       mode: 'cors',
       headers: {
           'Content-Type': 'application/json'
       }, 
       body: JSON.stringify({
        "name": name,
        "image": image,
        "city": city
       })
   })
   const updatedSchool =  await response.json()
   console.log(updatedSchool)
   }
  
    return(
        <body>
<div className='edit-page'>
            <h1>Edit School</h1>
            <form className="edit-form">
                <div className='row edit-content'  style={{marginBottom: '25px'}}>
                <label htmlFor='name' style={{marginRight: '25px'}}>School Name</label>
                <input required name='name' id='name' onChange={(e) => setName(e.target.value)} className='form-control' />
                </div>
                <div className=' row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='pic'  style={{marginRight: '25px'}}>School Image</label>
                <input name='pic' id='pic' onChange={(e) => setImage(e.target.value)} className='form-control' />
                </div>
                {/* <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='level' style={{marginRight: '25px'}}>Grade Level</label>
                <select>
                    <option id='elementary' className='form-control'>Elementary</option>
                    <option id='middle' className='form-control'>Middle</option>
                    <option id='high' className='form-control'>High</option>
                    <option id='continuation' className='form-control'>Continuation</option>
                </select>
                </div> */}
                {/* <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='district' style={{marginRight: '25px'}}>District</label>
                <input required name='district' id='district' className='form-control' />
                </div> */}
                
                <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='city'style={{marginRight: '25px'}}>City:</label>
                <input required name='district' id='district' onChange={(e) => setCity(e.target.value)} className='form-control' />
                </div>
                {/* <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='state' style={{marginRight: '25px'}}>State:</label>
                <input required name='district' id='district' className='form-control' />
                </div> */}
                <input className='editBtn' type='submit' value='Save Changes' 
                onClick={e => {
                   e.preventDefault()
                   editSchool() 
                }}
                    style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} />
                {/* <input className='deleteBtn' type='submit' value='Delete School' onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}} /> */}
            </form>
        </div>
        </body>
    )
}

export default EditSchool;