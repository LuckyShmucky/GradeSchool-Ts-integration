import React, { useEffect, useState } from 'react'

function School_Form () {
   const [schoolName, setSchoolName] = useState('')
   const  [image, setImage] = useState('')
   const [city, setCity] = useState('')

   useEffect(() => {
    //    console.log(`${schoolName} has changed`)
    //    console.log(`${image} has changed`)
    //    console.log(`${city} has changed`)
   }, [schoolName, image, city])

    const createSchool = async () => {
        const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/schools`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": schoolName,
            "image": image,
            "city": city
          }
        )
    })
const newSchool =  await response.json()
console.log(newSchool)
}
// createSchool()
    return (
        <div className='school-form'>
            <h1>Add a New School</h1>
            <form>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='name' style={{marginRight: '25px'}}>School Name</label>
                <input required name='name' id='name' className='form-control' type='text' onChange={event => setSchoolName(event.target.value)} />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='pic' style={{marginRight: '25px'}}>School Picture</label>
                <input name='pic' id='pic' onChange={event => setImage(event.target.value)} className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='city' style={{marginRight: '95px'}}>City</label>
                    <input  name='city' id='city' onChange={event => setCity(event.target.value)} className='form-control' />
                </div>
                     <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='state' style={{marginRight: '95px'}}>State</label>
                    <input name='state' id='state' className='form-control' />
                </div> 
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='level' style={{marginRight: '95px'}}>Grade Level</label>
                <select>
                    <option id='elementary' className='form-control'>Elementary</option>
                    <option id='middle' className='form-control'>Middle</option>
                    <option id='high' className='form-control'>High</option>
                    <option id='continuation' className='form-control'>Continuation</option>
                </select>
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='district' style={{marginRight: '75px'}}>District</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <input style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} type='submit' value='Add School' onClick={event => {
                     event.preventDefault()
                    createSchool()
                    }} />
            </form>
        </div>
    )
}

export default School_Form