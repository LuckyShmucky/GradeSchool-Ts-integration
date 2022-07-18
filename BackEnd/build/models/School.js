"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
require('dotenv').config();
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
mongoose_1.default.connect('mongodb+srv://Christian:Fc5E1NDTDndOVR6P@myfirstcluster.zfxo9.mongodb.net/GradeSchool');
var schoolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: { type: String, placeholder: "https://placekitten.com/300/300" },
    city: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    level: { type: String, enum: ['Elementary', 'Middle', 'High', 'Continuation'] },
    comments: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Comment"
        }]
}, { toJSON: { virtuals: true } });
exports.School = mongoose_1.default.model('School', schoolSchema);
module.exports = exports.School;
module.exports.School = require('./School');
module.exports.Comment = require('./Comment');
