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
var react_router_dom_1 = require("react-router-dom");
var NavBar_1 = __importDefault(require("../NavBar"));
var Footer_1 = __importDefault(require("../Footer"));
var EditSchool = function () {
    var schoolId = (0, react_router_dom_1.useParams)().schoolId;
    var _a = (0, react_1.useState)(''), name = _a[0], setName = _a[1];
    var _b = (0, react_1.useState)(''), image = _b[0], setImage = _b[1];
    var _c = (0, react_1.useState)(''), city = _c[0], setCity = _c[1];
    var _d = (0, react_1.useState)(''), state = _d[0], setState = _d[1];
    var _e = (0, react_1.useState)('Elementary'), level = _e[0], setLevel = _e[1];
    var _f = (0, react_1.useState)(''), district = _f[0], setDistrict = _f[1];
    var editSchool = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, updatedSchool;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://back-end-for-grade-school.herokuapp.com/schools/".concat(schoolId), {
                        method: 'PUT',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "name": name,
                            "image": image,
                            "city": city,
                            "state": state,
                            "level": level,
                            "district": district
                        })
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    updatedSchool = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("body", null,
        react_1.default.createElement("div", { className: 'edit-page' },
            react_1.default.createElement(NavBar_1.default, null),
            react_1.default.createElement("h1", null, "Edit School"),
            react_1.default.createElement("form", { className: "edit-form" },
                react_1.default.createElement("div", { className: 'row edit-content', style: { marginBottom: '25px' } },
                    react_1.default.createElement("label", { htmlFor: 'name', style: { marginRight: '25px' } }, "School Name"),
                    react_1.default.createElement("input", { required: true, name: 'name', id: 'name', onChange: function (e) { return setName(e.target.value); }, className: 'form-control' })),
                react_1.default.createElement("div", { className: ' row edit-content', style: { marginBottom: '25px' } },
                    react_1.default.createElement("label", { htmlFor: 'pic', style: { marginRight: '25px' } }, "School Image"),
                    react_1.default.createElement("input", { name: 'pic', id: 'pic', onChange: function (e) { return setImage(e.target.value); }, className: 'form-control' })),
                react_1.default.createElement("div", { className: 'row edit-content', style: { marginBottom: '25px' } },
                    react_1.default.createElement("label", { htmlFor: 'level', style: { marginRight: '25px' } }, "Grade Level"),
                    react_1.default.createElement("select", { onChange: function (e) { return setLevel(e.target.value); } },
                        react_1.default.createElement("option", { id: 'elementary', className: 'form-control' }, "Elementary"),
                        react_1.default.createElement("option", { id: 'middle', className: 'form-control' }, "Middle"),
                        react_1.default.createElement("option", { id: 'high', className: 'form-control' }, "High"),
                        react_1.default.createElement("option", { id: 'continuation', className: 'form-control' }, "Continuation"))),
                react_1.default.createElement("div", { className: 'row edit-content', style: { marginBottom: '25px' } },
                    react_1.default.createElement("label", { htmlFor: 'district', style: { marginRight: '25px' } }, "District"),
                    react_1.default.createElement("input", { required: true, name: 'district', id: 'district', className: 'form-control', onChange: function (e) { return setDistrict(e.target.value); } })),
                react_1.default.createElement("div", { className: 'row edit-content', style: { marginBottom: '25px' } },
                    react_1.default.createElement("label", { htmlFor: 'city', style: { marginRight: '25px' } }, "City:"),
                    react_1.default.createElement("input", { required: true, name: 'city', id: 'city', onChange: function (e) { return setCity(e.target.value); }, className: 'form-control' })),
                react_1.default.createElement("div", { className: 'row edit-content', style: { marginBottom: '25px' } },
                    react_1.default.createElement("label", { htmlFor: 'state', style: { marginRight: '25px' } }, "State:"),
                    react_1.default.createElement("input", { required: true, name: 'state', id: 'state', className: 'form-control', onChange: function (e) { return setState(e.target.value); } })),
                react_1.default.createElement("input", { className: 'editBtn', type: 'submit', value: 'Save Changes', onClick: function (e) {
                        e.preventDefault();
                        editSchool();
                    }, style: { borderRadius: '20px', padding: '10px', marginBottom: '25px' } })),
            react_1.default.createElement(Footer_1.default, null))));
};
exports.default = EditSchool;
