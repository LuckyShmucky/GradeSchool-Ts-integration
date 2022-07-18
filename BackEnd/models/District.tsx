//Dependencies
require('dotenv').config()
import mongoose from 'mongoose'
const { Schema } = mongoose
import {env} from 'process'

mongoose.connect('mongodb+srv://Christian:Fc5E1NDTDndOVR6P@myfirstcluster.zfxo9.mongodb.net/GradeSchool')

const districtSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {type: String, placeholder: "https://placekitten.com/300/300"},
    city: {type: String, required: true},
    state: {type: String, required: true},
    salary: {type: Number, required: true},
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {toJSON: {virtuals: true}})

export const District = mongoose.model('District', districtSchema)
module.exports = District