import React from 'react'

function AddCommentForm() {
  
    const handlePost = async () => {
        const response = await fetch(`http://localhost:3003/schools/62830dba0fba2c5b39746d01`,{
          method: 'POST',
          mode: 'cors',
          headers:{
            'Content-Type': 'application/json'
                  } ,
          body: JSON.stringify({ 
            "author": "StudentPerson",
            "content": "I like school but don't like school",
            "stars": "1"
            })
        })
        const postData = await response.json()
        console.log(postData)
        }
    return (
        <div className='comment-add'>
            <form>
            <div className='row' style={{marginTop: '25px'}}> 
                    <label htmlFor='content'>Content</label>
                    </div>
                    <div className='row' style={{marginTop: '25px'}}>
                    <textarea id='content' name='content' className='form-control'></textarea>
                    </div>
                    <div className='row' style={{marginTop: '25px', marginBottom: '25px'}}>
                        <label htmlFor='author' style={{marginRight: '25px'}}>Author</label>
                        <input type='text' id='author' name='author' className='form-control'/>
                        <label htmlFor='stars' style={{marginRight: '25px', marginLeft: '25px'}}>Star Rating</label>
                        <input type='range' min='1' max='5' step='0.5' name='stars' id='stars' className='form-control'/>
                    </div>
                    <input style={{marginBottom: '25px', borderRadius: '15px', padding: '10px'}}
                    type="submit" value="Add Comment" onClick={() => handlePost} />
            </form>
        </div>
    )
}

export default AddCommentForm