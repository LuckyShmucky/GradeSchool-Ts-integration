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
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/DistrictForm.tsx";
const react_1 = require("react");
const NavBar_1 = __importDefault(require("./NavBar"));
const Footer_1 = __importDefault(require("./Footer"));
function District_Form() {
    const [districtName, setDistrictName] = (0, react_1.useState)('');
    const [image, setImage] = (0, react_1.useState)('');
    const [city, setCity] = (0, react_1.useState)('');
    const [state, setState] = (0, react_1.useState)('');
    const [salary, setSalary] = (0, react_1.useState)(50);
    const createDistrict = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/districts`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": districtName,
                "image": image,
                "city": city,
                "state": state,
                "salary": salary
            })
        });
        const newDistrict = yield response.json();
        console.log(newDistrict);
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)("body", { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'district-form' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("h1", { children: "Add a New District" }, void 0, false, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("form", { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'name', style: { marginRight: '25px' } }, { children: "District Name" }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { required: true, name: 'name', id: 'name', className: 'form-control', type: 'text', onChange: event => setDistrictName(event.target.value) }, void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'pic', style: { marginRight: '25px' } }, { children: "District Picture" }), void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { name: 'pic', id: 'pic', onChange: event => setImage(event.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 42, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'city', style: { marginRight: '95px' } }, { children: "City" }), void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { name: 'city', id: 'city', onChange: event => setCity(event.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 48, columnNumber: 21 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'state', style: { marginRight: '95px' } }, { children: "State" }), void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { name: 'state', id: 'state', onChange: event => setState(event.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 21 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'salary', style: { marginRight: '165px' } }, { children: "Salary" }), void 0, false, { fileName: _jsxFileName, lineNumber: 55, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { name: 'salary', id: 'salary', className: 'form-control', onChange: event => setSalary(parseInt(event.target.value)), type: 'number', min: '50', max: '10000', required: true }, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 21 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { style: { borderRadius: '20px', padding: '10px', marginBottom: '25px', marginTop: '25px' }, type: 'submit', value: 'Add District', onClick: event => {
                                event.preventDefault();
                                createDistrict();
                            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 17 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 13 }, this));
}
exports.default = District_Form;
