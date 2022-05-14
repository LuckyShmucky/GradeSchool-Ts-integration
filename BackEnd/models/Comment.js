const mongoose = require('mongoose')
const { Schema } = mongoose

const CommentSchema = new Schema ({
    author: {type: String, default: "Anonymous"},
    content: { type: String, required: true },

}, { toJSON: { virtuals: true }})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
