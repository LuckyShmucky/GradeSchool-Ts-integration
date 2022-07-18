"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var react_1 = __importStar(require("react"));
var AddDistrictComment_1 = __importDefault(require("../AddDistrictComment"));
var react_router_dom_1 = require("react-router-dom");
var DistrictRating_1 = __importDefault(require("../../components/DistrictRating"));
var NavBar_1 = __importDefault(require("../NavBar"));
var Footer_1 = __importDefault(require("../Footer"));
var ShowDistrict = function () {
    var _a;
    var districtParams = (0, react_router_dom_1.useParams)();
    var _b = (0, react_1.useState)(), district = _b[0], setDistrict = _b[1];
    var getDistrict = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, myDistrict, foundDistrict;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://back-end-for-grade-school.herokuapp.com/districts/".concat(districtParams.districtId))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    myDistrict = _a.sent();
                    foundDistrict = myDistrict.data;
                    setDistrict(foundDistrict);
                    return [2 /*return*/];
            }
        });
    }); };
    //Delete Event
    var handleDelete = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var deleteResponse, deleteString;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, fetch("https://back-end-for-grade-school.herokuapp.com/districts/deleteCommets/".concat(districtParams.districtId), {
                            method: 'DELETE',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    deleteResponse = _a.sent();
                    return [4 /*yield*/, deleteResponse.json()];
                case 2:
                    deleteString = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    getDistrict();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(NavBar_1.default, null),
        react_1.default.createElement("h1", null, district === null || district === void 0 ? void 0 : district.name),
        react_1.default.createElement("img", { src: district === null || district === void 0 ? void 0 : district.image }),
        react_1.default.createElement(DistrictRating_1.default, { id: districtParams.districtId }),
        react_1.default.createElement("p", null,
            "$", district === null || district === void 0 ? void 0 :
            district.salary,
            "/day"),
        react_1.default.createElement("p", null, district === null || district === void 0 ? void 0 : district.city),
        react_1.default.createElement("p", null, district === null || district === void 0 ? void 0 : district.state),
        react_1.default.createElement("h1", null, "Add Comments"), (_a = district === null || district === void 0 ? void 0 : district.comments) === null || _a === void 0 ? void 0 :
        _a.map(function (comment) { return react_1.default.createElement("div", { style: { padding: '10px' } },
            comment.content,
            "    ",
            comment.author,
            "    ",
            comment.stars,
            "       ",
            react_1.default.createElement(react_router_dom_1.Link, { to: { pathname: "/edit-comment" } },
                react_1.default.createElement("button", { type: "submit", style: { borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, "Edit Comment")),
            react_1.default.createElement(react_router_dom_1.Outlet, null),
            react_1.default.createElement("button", { type: "submit", onClick: handleDelete, style: { marginLeft: '10px', borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, "Delete Comment")); }),
        react_1.default.createElement(AddDistrictComment_1.default, { id: districtParams.districtId }),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = ShowDistrict;
