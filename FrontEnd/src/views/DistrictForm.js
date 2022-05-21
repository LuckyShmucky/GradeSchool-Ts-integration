import React, {useState} from 'react'

function District_Form() {
    const [districtName, setDistrictName] = useState('')
   const  [image, setImage] = useState('')
   const [city, setCity] = useState('')
   const [state, setState] = useState('')
   const [salary, setSalary] = useState(50)


    const createDistrict = async () => {
        const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": districtName,
            "image": image,
            "city": city,
            "state": state,
            "salary": salary
          }
        )
    })
const newDistrict =  await response.json()
console.log(newDistrict)
}
    return (
        <body>
        <div className='district-form'>
            <h1>Add a New District</h1>
            <form>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='name' style={{marginRight: '25px'}}>District Name</label>
                <input required name='name' id='name' className='form-control' type='text' onChange={event => setDistrictName(event.target.value)} />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='pic' style={{marginRight: '25px'}}>District Picture</label>
                <input name='pic' id='pic' onChange={event => setImage(event.target.value)} className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='city' style={{marginRight: '95px'}}>City</label>
                    <input  name='city' id='city' onChange={event => setCity(event.target.value)} className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='state' style={{marginRight: '95px'}}>State</label>
                    <input name='state' id='state' onChange={event => setState(event.target.value)} className='form-control' />
                </div>
                <div>
                    <label htmlFor='salary' style={{marginRight: '95px'}}>Salary</label>
                    <input name='salary' id='salary' className='form-control' onChange={event => setSalary(event.target.value)} type='number' min='50' max='10000' required/>
                </div>
                <input style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} type='submit' value='Add District' onClick={event => {
                     event.preventDefault()
                    createDistrict()
                    }} />
            </form>
        </div>
        </body>
    )
}

export default District_Form