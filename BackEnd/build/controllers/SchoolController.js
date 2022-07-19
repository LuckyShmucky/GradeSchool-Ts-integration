"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Dependencies
// const express = require('express')
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// const School = require('../models/School')
const School_1 = require("../models/School");
// const Comment = require('../models/Comment')
const Comment_1 = require("../models/Comment");
// Get all schools
router.get('/', async (req, res) => {
    try {
        const allSchools = await School_1.School.find();
        res.status(200).json({
            message: "These are the schools",
            data: allSchools
        });
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
// Search for schools by id
router.get('/:id', async (req, res) => {
    try {
        const foundSchool = await School_1.School.findById(req.params.id).populate('comments');
        res.status(200).json({
            data: foundSchool
        });
        console.log(foundSchool);
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
// This route is able to find one School by its name 
// cannot do just schools/:name because id already populates a possible 
router.get('/searchNames/:name', async (req, res) => {
    try {
        //the found school will be populated by the comments' data as well 
        const foundSchool = await School_1.School.findOne({ 'name': req.params.name }).populate('comments');
        res.status(200).json({
            data: foundSchool
        });
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
//Create a school
router.post('/', async (req, res) => {
    //if the body of the request is a falsy value the function will end
    if (req.body.name === false)
        return;
    try {
        const newSchool = await School_1.School.create(req.body);
        res.status(200).json({
            message: `new School named ${req.body.name} created`,
            data: newSchool
        });
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
// Creating comments on Schools
router.post('/:id', async (req, res) => {
    // console.log(req.body)
    try {
        const newComment = await Comment_1.Comment.create(req.body);
        const foundSchool = await School_1.School.findById(req.params.id);
        foundSchool.comments.push(newComment.id);
        await foundSchool.save();
        console.log(foundSchool.comments);
        res.status(200).json(`new comment posted by ${newComment.author}`);
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
//find and delete a district by Id  
router.delete('/:id', async (req, res) => {
    try {
        const deletedSchool = await School_1.School.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: `Deleted School with id:${req.params.id}`,
            data: deletedSchool
        });
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
// deleting comments by Id
router.delete('/deleteComments/:id', async (req, res) => {
    try {
        const deletedComment = await Comment_1.Comment.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: `Deleted comment with id:${req.params.id}`,
            data: deletedComment
        });
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
router.put('/:id', async (req, res) => {
    //if the body of the request is a falsy value the function will end
    if (req.body === false)
        return;
    try {
        const updatedSchool = await School_1.School.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: `Updated School with id:${req.params.id}`,
            data: updatedSchool
        });
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
router.put('/updateComments/:id', async (req, res) => {
    //if the body of the request is a falsy value the function will end
    if (req.body === false)
        return;
    try {
        const updatedComments = await Comment_1.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: `Updated comment with id:${req.params.id}`,
            data: updatedComments
        });
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message
            }
        });
    }
});
module.exports = router;
