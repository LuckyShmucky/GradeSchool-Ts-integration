# GradeSchool
![This is a badge saying, "Made By: Christian Luciano"](https://img.shields.io/badge/Made%20By%3A-Christian%20Luciano-brightgreen)
![This is a badge saying, "Made By: Craig Caparaz"](https://img.shields.io/badge/Creator-Craig%20Caparaz-brightgreen) 
![This is a badge saying, "Made By: Amanda Woods"](https://img.shields.io/badge/Creator-Amanda%20Woods-brightgreen) 

## What This App Does
Allows substitute teachers to rate school districts and individual schools, based on factors such as salary, staff support, and levels of student misbehavior, similar to Yelp or GlassDoor. 

## Why It Matters
Substitute teachers are independent contractors. As such they have no union and word of mouth is slow and inefficient in the digital age. As demand for substitute teachers grows relative to supply, substitutes should know the best places to invest their limited time. 



## Features
- CRUD posts for school districts (only for verified users)
- CRUD comments for both schools and districts (any user can interact with their own comments)
- User friendly Navigation for all routes


## Tech Stack
- Typescript
- Tailwind
- Bootstrap
- React
- Fetch
- NodeJs
- Mongoose
- MongoDB
- Express 
- Cors

## Backend API endpoints

- Root URL that returns message in the form of json letting you know you've hit the correct URL
```
fetch('https://back-end-for-grade-school.herokuapp.com')
```
- Url that returns the list of all schools
- route is also used to post new schools
```
fetch('https://back-end-for-grade-school.herokuapp.com/schools')
```

- route allows you to find a school by id and update or delete it 

```
fetch('https://back-end-for-grade-school.herokuapp.com/schools/:id')
```
- route that lets you find a school by its name (name must be added after searchNames) example: schools/searchName/school-name
```
fetch('https://back-end-for-grade-school.herokuapp.com/schools/
searchNames')
```
- route is used to find school by id and delete it
- is also used to add add new comments with post method
```
fetch('https://back-end-for-grade-school.herokuapp.com/schools/:id
```

- route is used to find a comment by id and delete it
```
fetch('https://back-end-for-grade-school.herokuapp.com/schools/deleteComments/:id)

```
- returns list of all districts 
- route is also used to post new districts
```
fetch('https://back-end-for-grade-school.herokuapp.com/districts')
```
- route is used to find a district by id and can update or delete a district as well
```
fetch('https://back-end-for-grade-school.herokuapp.com/districts/:id')
```
- route allows you to find a comment by id and delete it

```
fetch('https://back-end-for-grade-school.herokuapp.com/districts/deleteComments/:id')
```

- route allows you to find a comment by id and update it 
```
fetch('https://back-end-for-grade-school.herokuapp.com/districts/updateComment/:id')
```

## Current Issues
- Integrating Typescript has prevented the app from running but has easy fixes
- Back end routes are some what repetitive (especially when it comes to complete CRUD actions with comments)
- Comments might need their own controller
