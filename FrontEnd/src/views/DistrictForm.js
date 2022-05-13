import React from 'react'

function District_Form() {
    return(
        <div className='district-form'>
            <h1>Add a New District</h1>
            <form method="POST" action="/districts">
                <div className='row'>
                <label htmlFor='name'>District Name</label>
                <input name='name' id='name' required className='form-control' />
                </div>
                <div className='row'>
                <label htmlFor='pic'>District Picture</label>
                <input name='pic' id='pic' className='form-control' />
                </div>
                <div className='row'>
                <label htmlFor='salary'>Substitute Salary Per Day</label>
                <input type='number' required min='50' max='10000' name='salary' id='salary' className='form-control' />
                </div>
                <div className='row'>
                <input className='btn btn-primary' type='submit' value='Add District' />
                </div>
            </form>
        </div>
    )
}

export default District_Form