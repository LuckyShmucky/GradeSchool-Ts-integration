const express = require('express')
const router = express.Router()
const District = require('../models/Districts')


router.get('/', async (req, res) =>{
    try{
      const allDistricts = District.find()
        res.status(200).json({
            message: "These are the districts",
            data: allDistricts
        })
    } catch(err){
        res.status(200).json(err)
    }
})


//get route to test if connection is working 

//Create a district
router.post('/', async (req, res) =>{
    try{
      const newDistrict = District.create(req.body)
      res.status(200).json({
          message: "new District created",
          data: newDistrict
      })
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router