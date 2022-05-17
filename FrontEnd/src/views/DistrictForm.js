import React from 'react'

function District_Form() {
    const data = {name: '', image: '', city: '', salary: 50}
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
    )
}

export default District_Form