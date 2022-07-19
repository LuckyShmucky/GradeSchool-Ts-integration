"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
// const mongoose = require('mongoose')
const mongoose_1 = __importDefault(require("mongoose"));
const CommentSchema = new mongoose_1.default.Schema({
    author: { type: String, default: "Anonymous" },
    content: { type: String, required: true },
    stars: { type: Number, required: true }
});
exports.Comment = mongoose_1.default.model('Comment', CommentSchema);
module.exports = exports.Comment;
