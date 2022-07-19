"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Dependencies
const path = require('path');
require('dotenv').config();
// require('dotenv').config({ path: '../backend/.env' });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// const mongoose = require('mongoose')
const app = (0, express_1.default)();
const cors = require('cors');
mongoose_1.default.connect('mongodb+srv://Christian:Fc5E1NDTDndOVR6P@myfirstcluster.zfxo9.mongodb.net/GradeSchool', function () { console.log('connected to mongoDB '); });
// CONFIGURATION / MIDDLEWARE 
app.use(cors({
    origin: '*'
}));
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/districts', require('./controllers/DistrictController'));
app.use('/schools', require('./controllers/SchoolController'));
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Grade School!'
    });
});
app.get('/districts', (req, res) => {
    console.log('hello');
});
app.get('/schools', (req, res) => {
    try {
        res.status(200).json({
            message: "You've hit the school route"
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
app.get('*', (req, res) => {
    res.render('error');
});
app.listen(process.env.PORT, () => {
    console.log('server is running');
});
