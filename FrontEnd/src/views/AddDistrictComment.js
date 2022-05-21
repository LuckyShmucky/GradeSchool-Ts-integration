import React, {useState} from 'react'

function AddDistrictCommentForm(id) {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('Anonymous')
    const [stars, setStars] = useState(3)
    const handleClick = async () => {
        const response = await fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${id}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "content": content,
            "author": author,
            "stars": stars
        })
    })
const string =  await response.json()
}
    return (
        <div className='comment-add'>
            <form>
            <div className='row' style={{marginTop: '25px'}}> 
                    <label htmlFor='content'>Content</label>
                    </div>
                    <div className='row' style={{marginTop: '25px'}}>
                    <textarea id='content' name='content' className='form-control' onChange={event => setContent(event.target.value)}></textarea>
                    </div>
                    <div className='row' style={{marginTop: '25px', marginBottom: '25px'}}>
                        <label htmlFor='author' style={{marginRight: '25px'}}>Author</label>
                        <input type='text' id='author' name='author' className='form-control' onChange={event => setAuthor(event.target.value)}/>
                        <label htmlFor='stars' style={{marginRight: '25px', marginLeft: '25px'}}>Star Rating</label>
                        <input type='range' min='1' max='5' step='0.5' name='stars' id='stars' className='form-control' onChange={event => setStars(event.target.value)}/>
                    </div>
                    <input style={{marginBottom: '25px', borderRadius: '15px', padding: '10px'}} type="submit" value="Add Comment" onClick={event => {
                        event.preventDefault()
                        handleClick()
                    }} />
            </form>
        </div>
    )
}

export default AddDistrictCommentForm