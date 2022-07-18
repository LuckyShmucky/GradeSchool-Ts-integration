"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
// require('dotenv').config({ path: '../backend/.env' });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = (0, express_1.default)();
var cors_1 = __importDefault(require("cors"));
mongoose_1.default.connect('mongodb+srv://Christian:Fc5E1NDTDndOVR6P@myfirstcluster.zfxo9.mongodb.net/GradeSchool', function () { console.log('connected to mongoDB '); });
// CONFIGURATION / MIDDLEWARE 
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/districts', require('./controllers/DistrictController'));
app.use('/schools', require('./controllers/SchoolController'));
app.get('/', function (req, res) {
    res.status(200).json({
        message: 'Welcome to Grade School!'
    });
});
app.get('/districts', function (req, res) {
    console.log('hello');
});
app.get('/schools', function (req, res) {
    try {
        res.status(200).json({
            message: "You've hit the school route"
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
app.get('*', function (req, res) {
    res.render('error');
});
app.listen(process.env.PORT, function () {
    console.log('server is running');
});
