//Dependencies
const express = require('express')
const router = express.Router()
const School = require('../models/School')

router.get('/', async (req, res) =>{
    try{
      const allSchools = await School.find()
        res.status(200).json({
            message: "These are the schools",
            data: allSchools
        })
    } catch(err){
        res.status(200).json(err)
    }
})


//Create a school
router.post('/', async (req, res) =>{
    //if the body of the request is a falsy value the function will end
    if (req.body.name === false) return;
    try{
      const newSchool = await School.create(req.body)
      res.status(200).json({
          message: "new School created",
          data: newSchool
      })
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router