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
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/Pages/EditSchool.tsx";
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const NavBar_1 = __importDefault(require("../NavBar"));
const Footer_1 = __importDefault(require("../Footer"));
const EditSchool = () => {
    const { schoolId } = (0, react_router_dom_1.useParams)();
    const [name, setName] = (0, react_1.useState)('');
    const [image, setImage] = (0, react_1.useState)('');
    const [city, setCity] = (0, react_1.useState)('');
    const [state, setState] = (0, react_1.useState)('');
    const [level, setLevel] = (0, react_1.useState)('Elementary');
    const [district, setDistrict] = (0, react_1.useState)('');
    const editSchool = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`http://back-end-for-grade-school.herokuapp.com/schools/${schoolId}`, {
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
        });
        const updatedSchool = yield response.json();
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)("body", { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'edit-page' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("h1", { children: "Edit School" }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("form", Object.assign({ className: "edit-form" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'name', style: { marginRight: '25px' } }, { children: "School Name" }), void 0, false, { fileName: _jsxFileName, lineNumber: 42, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { required: true, name: 'name', id: 'name', onChange: (e) => setName(e.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: ' row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'pic', style: { marginRight: '25px' } }, { children: "School Image" }), void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { name: 'pic', id: 'pic', onChange: (e) => setImage(e.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'level', style: { marginRight: '25px' } }, { children: "Grade Level" }), void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("select", Object.assign({ onChange: (e) => setLevel(e.target.value) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("option", Object.assign({ id: 'elementary', className: 'form-control' }, { children: "Elementary" }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("option", Object.assign({ id: 'middle', className: 'form-control' }, { children: "Middle" }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("option", Object.assign({ id: 'high', className: 'form-control' }, { children: "High" }), void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("option", Object.assign({ id: 'continuation', className: 'form-control' }, { children: "Continuation" }), void 0, false, { fileName: _jsxFileName, lineNumber: 55, columnNumber: 21 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 18 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'district', style: { marginRight: '25px' } }, { children: "District" }), void 0, false, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { required: true, name: 'district', id: 'district', className: 'form-control', onChange: (e) => setDistrict(e.target.value) }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'city', style: { marginRight: '25px' } }, { children: "City:" }), void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { required: true, name: 'city', id: 'city', onChange: (e) => setCity(e.target.value), className: 'form-control' }, void 0, false, { fileName: _jsxFileName, lineNumber: 65, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row edit-content', style: { marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'state', style: { marginRight: '25px' } }, { children: "State:" }), void 0, false, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { required: true, name: 'state', id: 'state', className: 'form-control', onChange: (e) => setState(e.target.value) }, void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 67, columnNumber: 17 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { className: 'editBtn', type: 'submit', value: 'Save Changes', onClick: e => {
                                e.preventDefault();
                                editSchool();
                            }, style: { borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 17 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 1 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 12 }, this));
};
exports.default = EditSchool;
