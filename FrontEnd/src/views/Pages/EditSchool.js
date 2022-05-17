import React from 'react';

const EditSchool = () => {
    const data = {name: '', image: '', city: '', comments: []}
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
                <input className='editBtn' type='submit' value='Edit School' onClick={handleEdit} />
                <input className='deleteBtn' type='submit' value='Delete School' onClick={handleDelete} />
            </form>
        </div>
        
    )
}

export default EditSchool;