// const mongoose = require('mongoose')
import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema ({
    author: {type: String, default: "Anonymous"},
    content: { type: String, required: true },
    stars: { type: Number, required: true}
})

export const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
