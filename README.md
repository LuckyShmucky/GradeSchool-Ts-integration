# GradeSchool3

## What This App Does
Allows substitute teachers to rate school districts and individual schools, based on factors such as salary, staff support, and levels of student misbehavior, similar to Yelp or GlassDoor. 

## Why It Matters
Substitute teachers are independent contractors. As such they have no union and word of mouth is slow and inefficient in the digital age. As demand for substitute teachers grows relative to supply, substitutes should know the best places to invest their limited time. 

# Grade School



- [ ] Creating home route, show route, index route
- [ ] Create backend (controllers, models, CRUD capabilities) 
- [ ] Mobile friendly UI/UX

## Features
- CRUD posts for school districts (only for verified users)
- CRUD comments for both schools and districts (any user can interact with their own comments)
- User friendly Navigation for all routes


## Data Structure Key Points

## Code Snippets for Working Fetch Requests 
```
const handleFetch = async () =>{
    const response = await fetch(`http://localhost:3003/schools/searchNames/${schoolName}`)
    const data = await response.json()
    console.log(data.data)
  }


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

     const response = await fetch(`http://localhost:3003/schools/627ff0233fecd55a84bdcfca`,{
      method: 'DELETE',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
              } 
    })
    const deletedData = await response.json()
    console.log(deletedData)
    }


  ```