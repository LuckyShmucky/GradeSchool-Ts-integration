//Dependencies
// const express = require('express')
import express from "express"
const router = express.Router()
// const School = require('../models/School')
import { School } from "../models/School"
// const Comment = require('../models/Comment')
import { Comment } from "../models/Comment"

// Get all schools
router.get('/', async (req: express.Request, res: express.Response) =>{
    try{
      const allSchools = await School.find()
        res.status(200).json({
            message: "These are the schools",
            data: allSchools
        })
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})
// Search for schools by id
router.get('/:id', async (req: express.Request, res: express.Response) =>{
    try{
        const foundSchool = await School.findById(req.params.id).populate('comments')
        res.status(200).json({
            data: foundSchool
        })
        console.log(foundSchool)
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})
// This route is able to find one School by its name 
// cannot do just schools/:name because id already populates a possible 
router.get('/searchNames/:name', async (req: express.Request, res: express.Response) =>{
    try{
        //the found school will be populated by the comments' data as well 
      const foundSchool = await School.findOne({'name': req.params.name}).populate('comments')
        res.status(200).json({
            data: foundSchool
        })
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})
//Create a school
router.post('/', async (req: express.Request, res: express.Response) =>{
    //if the body of the request is a falsy value the function will end
    if (req.body.name === false) return;
    try{
      const newSchool = await School.create(req.body)
      res.status(200).json({
          message: `new School named ${req.body.name} created`,
          data: newSchool
      })
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})
// Creating comments on Schools
router.post('/:id', async (req: express.Request, res: express.Response) =>{
    // console.log(req.body)
    try {
        const newComment = await Comment.create(req.body)
        const foundSchool = await School.findById(req.params.id)
        foundSchool.comments.push(newComment.id)
        await foundSchool.save()
        console.log(foundSchool.comments)
        res.status(200).json(`new comment posted by ${newComment.author}`)
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
  
  })
//find and delete a district by Id  
router.delete('/:id', async (req: express.Request, res: express.Response) =>{
    try{
       const deletedSchool = await School.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Deleted School with id:${req.params.id}`,
            data: deletedSchool
        })
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})
// deleting comments by Id
router.delete('/deleteComments/:id', async (req: express.Request, res: express.Response) =>{
    try{
       const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Deleted comment with id:${req.params.id}`,
            data: deletedComment
        })
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})
router.put('/:id', async (req: express.Request, res: express.Response) => {
    //if the body of the request is a falsy value the function will end
    if (req.body === false) return;
    try{
       const updatedSchool = await School.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            message: `Updated School with id:${req.params.id}`,
            data: updatedSchool
        } )
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})
router.put('/updateComments/:id', async (req: express.Request, res: express.Response) => {
    //if the body of the request is a falsy value the function will end
    if (req.body === false) return;
    try{
       const updatedComments = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            message: `Updated comment with id:${req.params.id}`,
            data: updatedComments
        } )
    } catch(err: Error | any){
        res.status(err.status || 500)
        res.json({
            err: {
                message: err.message
            }
        })
    }
})


module.exports = router