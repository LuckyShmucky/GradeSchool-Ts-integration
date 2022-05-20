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
    image: {type: String, placeholder: "https://placekitten.com/300/300"},
    city: {type: String, required: true},
    state: {type: String, required: true},
    salary: {type: Number, required: true},
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {toJSON: {virtuals: true}})

const District = mongoose.model('District', districtSchema)
module.exports = District