import React from 'react'

function School_Form () {
    return (
        <div className='school-form'>
            <h1>Add a New School</h1>
            <form>
                <div className='row'>
                <label htmlFor='name'>School Name</label>
                <input required name='name' id='name' className='form-control' />
                </div>
                <div className='row'>
                <label htmlFor='pic'>School Picture</label>
                <input name='pic' id='pic' className='form-control' />
                </div>
                <div className='row'>
                <label htmlFor='level'>Grade Level</label>
                <select>
                    <option id='elementary' className='form-control'>Elementary</option>
                    <option id='middle' className='form-control'>Middle</option>
                    <option id='high' className='form-control'>High</option>
                    <option id='continuation' className='form-control'>Continuation</option>
                </select>
                </div>
                <div className='row'>
                <label htmlFor='district'>District</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <input className='btn btn-primary' type='submit' value='Add School' />
            </form>
        </div>
    )
}

export default School_Form