//Dependencies
const express = require('express')
const router = express.Router()
const School = require('../models/school')


// Get all schools
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

// This route is able to find one School by its name
router.get('/:name', async (req, res) =>{
    try{
      const foundSchool = await School.findOne({'name': req.params.name})
        res.status(200).json({
            data: foundSchool
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
          message: `new School named ${req.body.name} created`,
          data: newSchool
      })
    } catch(err){
        res.status(500).json(err)
    }
})

// Creating comments on Schools
router.post('/:id', async (req, res) =>{
    // console.log(req.body)
    try {
        const foundSchool = await School.findById(req.params.id)
        console.log(foundSchool)
        const comment = await School.comments.create(req.body)
        console.log(comment)
        foundSchool.comments.push(comment.id)
        await foundSchool.save()
        res.status(200).json(`Created comment by ${req.body.author}`)
        
        //    res.redirect(`/places/${req.params.id}`)
    } catch(err){
        res.status(500).json(err)
    }
  
  })




//find and delete a district by Id
router.delete('/:id', async (req, res) =>{
    try{
       const deletedSchool = await School.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Deleted School with id:${req.params.id}`,
            data: deletedSchool
        })
    } catch(err){
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    //if the body of the request is a falsy value the function will end
    if (req.body === false) return;
    try{
       const updatedSchool = await School.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            message: `Updated School with id:${req.params.id}`,
            data: updatedSchool
        } )
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router