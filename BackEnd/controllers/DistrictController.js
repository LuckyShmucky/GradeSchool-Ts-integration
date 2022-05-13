const express = require('express')
const router = express.Router()
const District = require('../models/Districts')

//Get all districts
router.get('/', async (req, res) =>{
    try{
      const allDistricts = await District.find()
        res.status(200).json({
            message: "These are the districts",
            data: allDistricts
        })
    } catch(err){
        res.status(200).json(err)
    }
})

//Get one district by Id
router.get('/:id', async (req, res) =>{
    try{
      const foundDistrict = await District.findById(req.params.id)
        res.status(200).json({
            data: foundDistrict
        })
    } catch(err){
        res.status(200).json(err)
    }
})




//Create a district
router.post('/', async (req, res) =>{
    //if the body of the request is a falsy value the function will end
    if (req.body.name === false) return;
    try{
      const newDistrict = await District.create(req.body)
      res.status(200).json({
          message: "new District created",
          data: newDistrict
      })
    } catch(err){
        res.status(500).json(err)
    }
})


//find and delete a district by Id
router.delete('/:id', async (req, res) =>{
    try{
       const deletedDistrict = await District.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Deleted district with id:${req.params.id}`,
            data: deletedDistrict
        })
    } catch(err){
        res.status(500).json(err)
    }
})

//find and delete a district by Id
router.put('/:id', async (req, res) => {
    //if the body of the request is a falsy value the function will end
    if (req.body === false) return;
    try{
       const updatedDistrict = await District.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            message: `Updated district with id:${req.params.id}`,
            data: updatedDistrict
        } )
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router