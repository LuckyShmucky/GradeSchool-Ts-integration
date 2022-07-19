//Dependencies
const path = require('path')

require('dotenv').config()
// require('dotenv').config({ path: '../backend/.env' });
// const express = require('express')
import express from "express"
import mongoose from "mongoose"
// const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
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



app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Welcome to Grade School!'
    })
})

app.get('/districts', (req: express.Request, res: express.Response) =>{
    console.log('hello')
})

app.get('/schools', (req: express.Request, res: express.Response) =>{
    try {
        res.status(200).json({
            message: "You've hit the school route"
        })
    } catch(err){
        res.status(500).json(err)
    }
})

app.get('*', (req: express.Request, res: express.Response) =>{
    res.render('error')
})

app.listen(process.env.PORT, () =>{
    console.log('server is running')
})