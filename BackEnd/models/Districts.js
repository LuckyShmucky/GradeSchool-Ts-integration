//Dependencies
require('dotenv').config()
const mongoose = require('mongoose')
const {Schema } = mongoose

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopolgy: true
})

const districtSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
     
})


module.exports = districtSchema
