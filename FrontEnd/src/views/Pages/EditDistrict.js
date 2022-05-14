import React from "react";


const Edit = () => {
  return (
    <div className='edit-page'>
    <h1>Add a New District</h1>
    <form className="edit-form" method="POST" action="/districts">
        <div className='edit-content'>
        <label htmlFor='name'>District Name</label>
        <input name='name' id='name' required className='form-control' />
        </div>
        <div className='edit-content'>
        <label htmlFor='pic'>District Picture</label>
        <input name='pic' id='pic' className='form-control' />
        </div>
        <div className='edit-content'>
        <label htmlFor='salary'>Substitute Salary Per Day</label>
        <input type='number' required min='50' max='10000' name='salary' id='salary' className='form-control' />
        </div>
        <div className='edit-content'>
        <input className='editBtn' type='submit' value='Edit District' />
        <input className='deleteBtn' type='submit' value='Delete District' />
        </div>
    </form>
</div>
  );
};

export default Edit;
