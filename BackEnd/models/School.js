require('dotenv').config()
const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopolgy: true
})  

const schoolSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {type: String, placeholder: "https://placekitten.com/300/300"},
    city: {type: String, required: true},
    state: {type: String, required: true},
    comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }]   
}, {toJSON: {virtuals: true}})

const School = mongoose.model('School', schoolSchema)
module.exports = School
module.exports.School = require('./School')
module.exports.Comment = require('./Comment')



