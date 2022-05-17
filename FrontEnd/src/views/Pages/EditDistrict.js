import React from "react";


const Edit = () => {
  const data = {name: '', image: '', city: '', salary: 50}
   const handleEdit = async (e) => {
     e.preventDefault()
     const editResponse = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
      method: 'PUT',
       mode: 'cors',
       headers: {
           'Content-Type': 'application/json'
       }, 
       body: JSON.stringify(data)
   })
   const editString =  await editResponse.json()
   console.log(editString)
   }
   const handleDelete = async (e) => {
    e.preventDefault()
    const deleteResponse = await fetch(`http://localhost:3003/schools/627fdad83ad7a4f38b26c69b`, {
     method: 'DELETE',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  const deleteString =  await deleteResponse.json()
  console.log(deleteString)
  }
  return (
    <div className='edit-page'>
    <h1>Add a New District</h1>
    <form className="edit-form">
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
        <input className='editBtn' type='submit' value='Edit District' onClick={handleEdit} />
        <input className='deleteBtn' type='submit' value='Delete District' onClick={handleDelete} />
        </div>
    </form>
</div>
  );
};

export default Edit;
