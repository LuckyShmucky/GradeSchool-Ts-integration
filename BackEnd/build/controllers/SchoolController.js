"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Dependencies
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var School_1 = require("../models/School");
var Comment_1 = require("../models/Comment");
// Get all schools
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allSchools, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, School_1.School.find()];
            case 1:
                allSchools = _a.sent();
                res.status(200).json({
                    message: "These are the schools",
                    data: allSchools
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(err_1.status || 500);
                res.json({
                    err: {
                        message: err_1.message
                    }
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Search for schools by id
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foundSchool, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, School_1.School.findById(req.params.id).populate('comments')];
            case 1:
                foundSchool = _a.sent();
                res.status(200).json({
                    data: foundSchool
                });
                console.log(foundSchool);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(err_2.status || 500);
                res.json({
                    err: {
                        message: err_2.message
                    }
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// This route is able to find one School by its name 
// cannot do just schools/:name because id already populates a possible 
router.get('/searchNames/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foundSchool, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, School_1.School.findOne({ 'name': req.params.name }).populate('comments')];
            case 1:
                foundSchool = _a.sent();
                res.status(200).json({
                    data: foundSchool
                });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(err_3.status || 500);
                res.json({
                    err: {
                        message: err_3.message
                    }
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Create a school
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newSchool, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //if the body of the request is a falsy value the function will end
                if (req.body.name === false)
                    return [2 /*return*/];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, School_1.School.create(req.body)];
            case 2:
                newSchool = _a.sent();
                res.status(200).json({
                    message: "new School named ".concat(req.body.name, " created"),
                    data: newSchool
                });
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.status(err_4.status || 500);
                res.json({
                    err: {
                        message: err_4.message
                    }
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Creating comments on Schools
router.post('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newComment, foundSchool, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, Comment_1.Comment.create(req.body)];
            case 1:
                newComment = _a.sent();
                return [4 /*yield*/, School_1.School.findById(req.params.id)];
            case 2:
                foundSchool = _a.sent();
                foundSchool.comments.push(newComment.id);
                return [4 /*yield*/, foundSchool.save()];
            case 3:
                _a.sent();
                console.log(foundSchool.comments);
                res.status(200).json("new comment posted by ".concat(newComment.author));
                return [3 /*break*/, 5];
            case 4:
                err_5 = _a.sent();
                res.status(err_5.status || 500);
                res.json({
                    err: {
                        message: err_5.message
                    }
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//find and delete a district by Id  
router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedSchool, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, School_1.School.findByIdAndDelete(req.params.id)];
            case 1:
                deletedSchool = _a.sent();
                res.status(200).json({
                    message: "Deleted School with id:".concat(req.params.id),
                    data: deletedSchool
                });
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(err_6.status || 500);
                res.json({
                    err: {
                        message: err_6.message
                    }
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// deleting comments by Id
router.delete('/deleteComments/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedComment, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Comment_1.Comment.findByIdAndDelete(req.params.id)];
            case 1:
                deletedComment = _a.sent();
                res.status(200).json({
                    message: "Deleted comment with id:".concat(req.params.id),
                    data: deletedComment
                });
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                res.status(err_7.status || 500);
                res.json({
                    err: {
                        message: err_7.message
                    }
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedSchool, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //if the body of the request is a falsy value the function will end
                if (req.body === false)
                    return [2 /*return*/];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, School_1.School.findByIdAndUpdate(req.params.id, req.body, { new: true })];
            case 2:
                updatedSchool = _a.sent();
                res.status(200).json({
                    message: "Updated School with id:".concat(req.params.id),
                    data: updatedSchool
                });
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                res.status(err_8.status || 500);
                res.json({
                    err: {
                        message: err_8.message
                    }
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put('/updateComments/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedComments, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //if the body of the request is a falsy value the function will end
                if (req.body === false)
                    return [2 /*return*/];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Comment_1.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })];
            case 2:
                updatedComments = _a.sent();
                res.status(200).json({
                    message: "Updated comment with id:".concat(req.params.id),
                    data: updatedComments
                });
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                res.status(err_9.status || 500);
                res.json({
                    err: {
                        message: err_9.message
                    }
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
