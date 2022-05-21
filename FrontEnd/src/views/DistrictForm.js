import React, {useEffect, useState} from 'react'

function District_Form() {
    const [districtName, setDistrictName] = useState('')
   const  [image, setImage] = useState('')
   const [city, setCity] = useState('')
   const [salary, setSalary] = useState(50)

   useEffect(() => {
    //    console.log(`${schoolName} has changed`)
    //    console.log(`${image} has changed`)
    //    console.log(`${city} has changed`)
   }, [districtName, image, city, salary])

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
            "salary": salary
          }
        )
    })
const newDistrict =  await response.json()
console.log(newDistrict)
}
// createSchool()
    return (
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
                <div>
                    <label htmlFor='salary' style={{marginRight: '95px'}}>Salary</label>
                    <input name='salary' id='salary' className='form-control' onChange={event => setSalary(event.target.value)} type='number' min='50' max='10000' required/>
                </div>
                {/* commented out due to not having this field in the schema yet
                     <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='state' style={{marginRight: '95px'}}>State</label>
                    <input name='state' id='state' className='form-control' />
                </div> */}
                {/* <div className='row' style={{marginBottom: '25px'}}>
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
                </div> */}
                <input style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} type='submit' value='Add District' onClick={event => {
                     event.preventDefault()
                    createDistrict()
                    }} />
            </form>
        </div>
    )
    /*const data = {name: '', image: '', city: '', salary: 50}
    const handleClick = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
const string =  await response.json()
console.log(string)
}
    return(
        <div className='district-form'>
            <h1>Add a New District</h1>
            <form>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='name' style={{marginRight: '15px'}}>District Name</label>
                <input name='name' id='name' required className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='pic' style={{marginRight: '15px'}}>District Picture</label>
                <input name='pic' id='pic' className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='city' style={{marginRight: '85px'}}>City</label>
                    <input name='city' id='city' className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                    <label htmlFor='state' style={{marginRight: '85px'}}>State</label>
                    <input name='state' id='state' className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='salary' style={{marginRight: '25px'}}>Substitute Salary Per Day</label>
                <input type='number' required min='50' max='10000' name='salary' id='salary' className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <input type='submit' value='Add District' style={{borderRadius: '20px', padding: '10px'}} onClick={handleClick} />
                </div>
            </form>
        </div>
    )*/
}

export default District_Form