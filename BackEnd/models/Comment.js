const mongoose = require('mongoose')


const CommentSchema = new mongoose.Schema ({
    author: {type: String, default: "Anonymous"},
    content: { type: String, required: true },
    stars: { type: Number, required: true}
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
