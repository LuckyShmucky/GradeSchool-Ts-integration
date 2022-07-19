"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// const District = require('../models/District')
const District_1 = require("../models/District");
const Comment_1 = require("../models/Comment");
// const Comment = require('../models/Comment')
//Get all districts
router.get('/', async (req, res) => {
    try {
        const allDistricts = await District_1.District.find();
        res.status(200).json({
            message: "These are the districts",
            data: allDistricts
        });
    }
    catch (err) {
        res.status(200).json(err);
    }
});
//Get one district by Id
router.get('/:id', async (req, res) => {
    try {
        const foundDistrict = await District_1.District.findById(req.params.id).populate('comments');
        res.status(200).json({
            data: foundDistrict
        });
    }
    catch (err) {
        res.status(200).json(err);
    }
});
//Create a district
router.post('/', async (req, res) => {
    //if the body of the request is a falsy value the function will end
    if (req.body.name === false)
        return;
    try {
        const newDistrict = await District_1.District.create(req.body);
        res.status(200).json({
            message: "new District created",
            data: newDistrict
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
//create comment on district
router.post('/:id', async (req, res) => {
    // console.log(req.body)
    try {
        const newComment = await Comment_1.Comment.create(req.body);
        const foundDistrict = await District_1.District.findById(req.params.id);
        foundDistrict.comments.push(newComment.id);
        await foundDistrict.save();
        console.log(foundDistrict.comments);
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
        const deletedDistrict = await District_1.District.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: `Deleted district with id:${req.params.id}`,
            data: deletedDistrict
        });
    }
    catch (err) {
        res.status(500).json(err);
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
//find and update a district by Id
router.put('/:id', async (req, res) => {
    //if the body of the request is a falsy value the function will end
    if (req.body === false)
        return;
    try {
        const updatedDistrict = await District_1.District.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: `Updated district with id:${req.params.id}`,
            data: updatedDistrict
        });
    }
    catch (err) {
        res.status(500).json(err);
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
