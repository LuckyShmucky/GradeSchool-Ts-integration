import React, {useState, useEffect} from "react";
import { useParams, useLocation } from 'react-router-dom';


const Edit = () => {
  const { districtId } = useParams()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [city, setCity] = useState('')
    const [salary, setSalary] = useState(50)
   
    useEffect(() =>{
        console.log(name, 'district name')
        console.log(image, 'district image')
        console.log(city, 'city ')
        console.log(salary, 'salary')
    }, [name, city, image, salary])
    console.log(districtId, 'this is the id for the district')
   // the handle functions need to be updated
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
        "salary": salary
       })
   })
   const updatedDistrict =  await response.json()
   console.log(updatedDistrict)
   }
  
    return(
        <body>
<div className='edit-page'>
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
                <input required name='city' id='city' onChange={(e) => setCity(e.target.value)} className='form-control' />
                </div>
                <div className="row edit-content" style={{marginBottom: '25px'}}>
                  <label htmlFor="salary" style={{marginRight: '25px'}}>Substitute Salary Per Day</label>
                  <input type='number' min='50' max='10000' required className="form-control" name='salary' id='salary' onChange={(e) => setSalary(e.target.value)} />
                </div>
                {/* <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='state' style={{marginRight: '25px'}}>State:</label>
                <input required name='district' id='district' className='form-control' />
                </div> */}
                <input className='editBtn' type='submit' value='Save Changes' 
                onClick={e => {
                   e.preventDefault()
                   editDistrict() 
                }}
                    style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} />
                {/* <input className='deleteBtn' type='submit' value='Delete School' onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}} /> */}
            </form>
        </div>
        </body>
    )
  /*const data = {name: '', image: '', city: '', salary: 50}
   const handleEdit = async (e) => {
     e.preventDefault()
     const editResponse = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
      method: 'PUT',
       mode: 'cors',
       headers: {
           'Content-Type': 'application/json'
       }, 
       body: JSON.stringify(data)
   })
   const editString =  await editResponse.json()
   console.log(editString)
   }
   const handleDelete = async (e) => {
    e.preventDefault()
    const deleteResponse = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
     method: 'DELETE',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  const deleteString =  await deleteResponse.json()
  console.log(deleteString)
  }
  return (
    <div className='edit-page'>
    <h1>Edit District</h1>
    <form className="edit-form">
        <div className=' row edit-content' style={{marginBottom: '25px'}}>
        <label htmlFor='name' style={{marginRight: '15px'}}>District Name</label>
        <input name='name' id='name' required className='form-control' />
        </div>
        <div className='row edit-content' style={{marginBottom: '25px'}}>
        <label htmlFor='pic' style={{marginRight: '15px'}}>District Picture</label>
        <input name='pic' id='pic' className='form-control' />
        </div>
        <div className='row edit-content' style={{marginBottom: '25px'}}>
        <label htmlFor='salary' style={{marginRight: '15px'}}>Substitute Salary Per Day</label>
        <input type='number' required min='50' max='10000' name='salary' id='salary' className='form-control' />
        </div>
        <div className='edit-content'>
        <input className='editBtn' type='submit' value='Edit District' onClick={handleEdit} style={{borderRadius: '20px', padding: '10px'}} />
        <input className='deleteBtn' type='submit' value='Delete District' onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px'}}/>
        </div>
    </form>
</div>
  );*/
};

export default Edit;
