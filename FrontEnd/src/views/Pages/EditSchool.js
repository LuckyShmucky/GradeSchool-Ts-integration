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
<div className='edit-page'>
            <h1>Edit School Review</h1>
            <form className="edit-form">
                <div className='row edit-content'  style={{marginBottom: '25px'}}>
                <label htmlFor='name' style={{marginRight: '25px'}}>School Name</label>
                <input required name='name' id='name' className='form-control' />
                </div>
                <div className=' row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='pic' style={{marginRight: '25px'}}>School Picture</label>
                <input name='pic' id='pic' className='form-control' />
                </div>
                <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='level' style={{marginRight: '25px'}}>Grade Level</label>
                <select>
                    <option id='elementary' className='form-control'>Elementary</option>
                    <option id='middle' className='form-control'>Middle</option>
                    <option id='high' className='form-control'>High</option>
                    <option id='continuation' className='form-control'>Continuation</option>
                </select>
                </div>
                <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='district' style={{marginRight: '25px'}}>District</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='district' style={{marginRight: '25px'}}>District</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='city'style={{marginRight: '25px'}}>City:</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <div className='row edit-content' style={{marginBottom: '25px'}}>
                <label htmlFor='state' style={{marginRight: '25px'}}>State:</label>
                <input required name='district' id='district' className='form-control' />
                </div>
                <input className='editBtn' type='submit' value='Add School changes' onClick={handleEdit} style={{borderRadius: '20px', padding: '10px', marginBottom: '25px'}} />
                <input className='deleteBtn' type='submit' value='Delete School' onClick={handleDelete} style={{marginLeft:'10px', borderRadius: '20px', padding: '10px', marginBottom: '25px'}} />
            </form>
        </div>
    )
}

export default EditSchool;