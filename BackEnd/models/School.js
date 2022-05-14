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
    image: {type: String, required: true},
    city: {type: String, required: true},
       
}, {toJSON: {virtuals: true}})

const School = mongoose.model('School', schoolSchema)
module.exports = School


