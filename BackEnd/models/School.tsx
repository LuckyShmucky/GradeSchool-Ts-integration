require('dotenv').config()
import mongoose from 'mongoose'
const { Schema } = mongoose

mongoose.connect('mongodb+srv://Christian:Fc5E1NDTDndOVR6P@myfirstcluster.zfxo9.mongodb.net/GradeSchool')  

const schoolSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {type: String, placeholder: "https://placekitten.com/300/300"},
    city: {type: String, required: true},
    state: {type: String, required: true},
    district: {type: String, required: true},
    level: {type: String, enum: ['Elementary', 'Middle', 'High', 'Continuation']},
    comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }]   
}, {toJSON: {virtuals: true}})

 export const School = mongoose.model('School', schoolSchema)
module.exports = School
module.exports.School = require('./School')
module.exports.Comment = require('./Comment')



