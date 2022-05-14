import React from 'react'

function School_Form () {
    return (
        <div className='school-form'>
            <h1>Add a New School</h1>
            <form>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='name' style={{marginRight: '25px'}}>School Name</label>
                <input required name='name' id='name' className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='pic' style={{marginRight: '25px'}}>School Picture</label>
                <input name='pic' id='pic' className='form-control' />
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='level' style={{marginRight: '85px'}}>Grade Level</label>
                <select>
                    <option id='elementary' className='form-control'>Elementary</option>
                    <option id='middle' className='form-control'>Middle</option>
                    <option id='high' className='form-control'>High</option>
                    <option id='continuation' className='form-control'>Continuation</option>
                </select>
                </div>
                <div className='row' style={{marginBottom: '25px'}}>
                <label htmlFor='district' style={{marginRight: '55px'}}>District</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <input style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} type='submit' value='Add School' />
            </form>
        </div>
    )
}

export default School_Form