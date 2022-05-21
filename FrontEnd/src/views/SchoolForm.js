import React, { useState } from 'react'

function School_Form () {
   const [schoolName, setSchoolName] = useState('')
   const  [image, setImage] = useState('')
   const [city, setCity] = useState('')
   const [state, setState] = useState('')
   const [level, setLevel] = useState('Elementary')
   const [district, setDistrict] = useState('District')

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
            "city": city,
            "state": state,
            "level": level,
            "district": district
          }
        )
    })
const newSchool =  await response.json()
}
    return (
        <body>
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
                    <input name='state' id='state' className='form-control' onChange={event => setState(event.target.value)} />
                </div> 
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='level' style={{marginRight: '95px'}}>Grade Level</label>
                <select onChange={event => setLevel(event.target.value)}>
                    <option id='elementary' className='form-control'>Elementary</option>
                    <option id='middle' className='form-control'>Middle</option>
                    <option id='high' className='form-control'>High</option>
                    <option id='continuation' className='form-control'>Continuation</option>
                </select>
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='district' style={{marginRight: '75px'}}>District</label>
                <input required name='district' id='district' className='form-control' onChange={event => setDistrict(event.target.value)} />
                </div>
                <input style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} type='submit' value='Add School' onClick={event => {
                     event.preventDefault()
                    createSchool()
                    }} />
            </form>
        </div>
        </body>
    )
}

export default School_Form