"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.District = void 0;
//Dependencies
require('dotenv').config();
// const mongoose = require('mongoose')
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
// import 'env' from 'process'
mongoose_1.default.connect('mongoURI');
const districtSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: { type: String, placeholder: "https://placekitten.com/300/300" },
    city: { type: String, required: true },
    state: { type: String, required: true },
    salary: { type: Number, required: true },
    comments: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Comment"
        }]
}, { toJSON: { virtuals: true } });
exports.District = mongoose_1.default.model('District', districtSchema);
module.exports = exports.District;
