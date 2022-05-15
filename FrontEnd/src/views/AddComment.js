import React from 'react'

function AddCommentForm() {
    const data = {content: '', author: '', stars: 3}
    const handleClick = () => {
        fetch(`http://localhost:3003/schools/Helix`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => console.log('Success', data)).catch((error) => console.log('Error', error))
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
                    <input style={{marginBottom: '25px', borderRadius: '15px', padding: '10px'}} type="submit" value="Add Comment" onClick={handleClick} />
            </form>
        </div>
    )
}

export default AddCommentForm