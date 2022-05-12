//Dependencies
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    function(){ console.log('connected to mongoDB ') }
  )

// CONFIGURATION / MIDDLEWARE 
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/districts', require('./controllers/DistrictController'))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Grade School!'
    })
})

app.get('/districts', (req, res) =>{
    console.log('hello')
})




app.listen(process.env.PORT, () =>{
    console.log('server is running')
})