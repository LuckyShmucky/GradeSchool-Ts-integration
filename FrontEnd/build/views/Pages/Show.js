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
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/Pages/Show.tsx";
const react_1 = require("react");
const AddComment_1 = __importDefault(require("../AddComment"));
const react_router_dom_1 = require("react-router-dom");
const Rating_1 = __importDefault(require("../../components/Rating"));
const NavBar_1 = __importDefault(require("../NavBar"));
const Footer_1 = __importDefault(require("../Footer"));
const Show = () => {
    var _a;
    const schoolParams = (0, react_router_dom_1.useParams)();
    const [school, setSchool] = (0, react_1.useState)({
        name: '',
        image: '',
        level: '',
        district: '',
        city: '',
        state: '',
        comments: []
    });
    const getSchool = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${schoolParams.schoolId}`);
        const mySchool = yield response.json();
        const foundSchool = mySchool.data;
        setSchool(foundSchool);
    });
    //Delete Event
    const handleDelete = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const deleteResponse = yield fetch(`https://back-end-for-grade-school.herokuapp.com/schools/deleteCommets/:${schoolParams.schoolId}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const deleteString = yield deleteResponse.json();
    });
    getSchool();
    return ((0, jsx_dev_runtime_1.jsxDEV)("body", { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("h1", { children: school.name }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("img", { src: school.image }, void 0, false, { fileName: _jsxFileName, lineNumber: 48, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Rating_1.default, { id: schoolParams.schoolId }, void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("p", { children: [school.level, " School"] }, void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("p", { children: school.district }, void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("p", { children: school.city }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("p", { children: school.state }, void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("h1", { children: "Add Comments" }, void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }, this), (_a = school === null || school === void 0 ? void 0 : school.comments) === null || _a === void 0 ? void 0 : _a.map((comment) => (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { padding: '10px' } }, { children: [comment.content, "    ", comment.author, "    ", comment.stars, (0, jsx_dev_runtime_1.jsxDEV)(react_router_dom_1.Link, Object.assign({ to: { pathname: "/edit-comment" } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("button", Object.assign({ type: "submit", style: { borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, { children: "Edit Comment" }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 51 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 12 }, this), (0, jsx_dev_runtime_1.jsxDEV)(react_router_dom_1.Outlet, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("button", Object.assign({ type: "submit", onClick: handleDelete, style: { marginLeft: '10px', borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, { children: "Delete Comment" }), void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 51 }, this)), (0, jsx_dev_runtime_1.jsxDEV)(AddComment_1.default, { id: schoolParams.schoolId }, void 0, false, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 11 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 5 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }, this));
};
exports.default = Show;
