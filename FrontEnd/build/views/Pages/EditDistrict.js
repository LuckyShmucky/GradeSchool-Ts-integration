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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/Pages/EditDistrict.tsx";
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const NavBar_1 = __importDefault(require("../NavBar"));
const Footer_1 = __importDefault(require("../Footer"));
const Edit = () => {
    const { districtId } = (0, react_router_dom_1.useParams)();
    const [name, setName] = (0, react_1.useState)('');
    const [image, setImage] = (0, react_1.useState)('');
    const [city, setCity] = (0, react_1.useState)('');
    const [state, setState] = (0, react_1.useState)('');
    const [salary, setSalary] = (0, react_1.useState)(50);
    const editDistrict = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`http://back-end-for-grade-school.herokuapp.com/districts/${districtId}`, {
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
                "salary": salary
            })
        });
        const updatedDistrict = yield response.json();
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)("body", { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'edit-page' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("h1", { children: "Edit District" }, void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("form", Object.assign({ className: "edit-form" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'name', style: { marginRight: '25px' } }, { children: "District Name" }), void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { required: true, name: 'name', id: 'name', onChange: (e) => setName(e.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 42, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: ' row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'pic', style: { marginRight: '25px' } }, { children: "District Image" }), void 0, false, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { name: 'pic', id: 'pic', onChange: (e) => setImage(e.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'city', style: { marginRight: '25px' } }, { children: "City:" }), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { required: true, name: 'city', id: 'city', onChange: (e) => setCity(e.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 48, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'state', style: { marginRight: '95px' } }, { children: "State" }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { name: 'state', id: 'state', onChange: event => setState(event.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 21 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: "row edit-content", style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: "salary", style: { marginRight: '25px' } }, { children: "Substitute Salary Per Day" }), void 0, false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 19 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { type: 'number', min: '50', max: '10000', required: true, className: "form-control", name: 'salary', id: 'salary', onChange: (e) => setSalary(parseInt(e.target.value)) }, void 0, false, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 19 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { className: 'editBtn', type: 'submit', value: 'Save Changes', onClick: e => {
                                e.preventDefault();
                                editDistrict();
                            }, style: { borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 67, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 1 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 12 }, this));
};
exports.default = Edit;
