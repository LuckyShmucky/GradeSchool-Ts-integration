//Dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    function(){ console.log('connected to mongoDB ') }
  )

// CONFIGURATION / MIDDLEWARE 
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/districts', require('./controllers/DistrictController'))
app.use('/schools', require('./controllers/SchoolController'))



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Grade School!'
    })
})

app.get('/districts', (req, res) =>{
    console.log('hello')
})

app.get('/schools', (req, res) =>{
    try {
        res.status(200).json({
            message: "You've hit the school route"
        })
    } catch(err){
        res.status(500).json(err)
    }
})

    app.get('*', (req, res) =>{
        res.render('error')
    })

    app.listen(process.env.PORT, () =>{
        console.log('server is running')
    })