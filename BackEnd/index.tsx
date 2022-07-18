//Dependencies
import path from 'path'

require('dotenv').config()
// require('dotenv').config({ path: '../backend/.env' });
import express from 'express'
import mongoose from 'mongoose'
const app = express()
import cors from 'cors'
mongoose.connect('mongodb+srv://Christian:Fc5E1NDTDndOVR6P@myfirstcluster.zfxo9.mongodb.net/GradeSchool', 
    function(){ console.log('connected to mongoDB ') }
  )

// CONFIGURATION / MIDDLEWARE 
app.use(cors({
    origin: '*'
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