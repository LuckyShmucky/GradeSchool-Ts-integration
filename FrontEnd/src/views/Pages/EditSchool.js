import React from 'react';

const EditSchool = () => {
    return(
        
             <div className='school-edit-page'>
            <h1>Edit School Review</h1>
            <form className="edit-form">
                <div className='edit-content'>
                <label htmlFor='name'>School Name</label>
                <input required name='name' id='name' className='form-control' />
                </div>
                <div className='edit-content'>
                <label htmlFor='pic'>School Picture</label>
                <input name='pic' id='pic' className='form-control' />
                </div>
                <div className='edit-content'>
                <label htmlFor='level'>Grade Level</label>
                <select>
                    <option id='elementary' className='form-control'>Elementary</option>
                    <option id='middle' className='form-control'>Middle</option>
                    <option id='high' className='form-control'>High</option>
                    <option id='continuation' className='form-control'>Continuation</option>
                </select>
                </div>
                <div className='edit-content'>
                <label htmlFor='district'>District</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <div className='edit-content'>
                <label htmlFor='district'>District</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <div className='edit-content'>
                <label htmlFor='city'>City:</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <div className='edit-content'>
                <label htmlFor='state'>State:</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <input className='editBtn' type='submit' value='Add School changes' />
                <input className='deleteBtn' type='submit' value='Delete School' />
            </form>
        </div>
        
    )
}

export default EditSchool;