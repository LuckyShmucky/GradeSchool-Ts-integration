//Dependencies
require('dotenv').config()
const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopolgy: true
})

const districtSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {type: String, required: true},
    city: {type: String, required: true},
    salary: {type: Number, required: true},
     
}, {toJSON: {virtuals: true}})

const District = mongoose.model('District', districtSchema)
module.exports = District

