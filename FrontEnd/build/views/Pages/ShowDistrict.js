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
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/Pages/ShowDistrict.tsx";
const react_1 = require("react");
const AddDistrictComment_1 = __importDefault(require("../AddDistrictComment"));
const react_router_dom_1 = require("react-router-dom");
const DistrictRating_1 = __importDefault(require("../../components/DistrictRating"));
const NavBar_1 = __importDefault(require("../NavBar"));
const Footer_1 = __importDefault(require("../Footer"));
const ShowDistrict = () => {
    var _a;
    const districtParams = (0, react_router_dom_1.useParams)();
    const [district, setDistrict] = (0, react_1.useState)({
        name: '',
        image: '',
        salary: '',
        city: '',
        state: '',
        comments: []
    });
    const getDistrict = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${districtParams.districtId}`);
        const myDistrict = yield response.json();
        const foundDistrict = myDistrict.data;
        setDistrict(foundDistrict);
    });
    //Delete Event
    const handleDelete = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const deleteResponse = yield fetch(`https://back-end-for-grade-school.herokuapp.com/districts/deleteCommets/${districtParams.districtId}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const deleteString = yield deleteResponse.json();
    });
    getDistrict();
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("h1", { children: district.name }, void 0, false, { fileName: _jsxFileName, lineNumber: 42, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("img", { src: district.image }, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(DistrictRating_1.default, { id: districtParams.districtId }, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("p", { children: ["$", district.salary, "/day"] }, void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("p", { children: district.city }, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("p", { children: district.state }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("h1", { children: "Add Comments" }, void 0, false, { fileName: _jsxFileName, lineNumber: 48, columnNumber: 7 }, this), (_a = district.comments) === null || _a === void 0 ? void 0 : _a.map((comment) => (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { padding: '10px' } }, { children: [comment.content, "    ", comment.author, "    ", comment.stars, "       ", (0, jsx_dev_runtime_1.jsxDEV)(react_router_dom_1.Link, Object.assign({ to: "/edit-comment", state: { stateParam: true } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("button", Object.assign({ type: "submit", style: { borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, { children: "Edit Comment" }), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 197 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 142 }, this), (0, jsx_dev_runtime_1.jsxDEV)(react_router_dom_1.Outlet, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("button", Object.assign({ type: "submit", onClick: handleDelete, style: { marginLeft: '10px', borderRadius: '20px', padding: '10px', marginBottom: '25px' } }, { children: "Delete Comment" }), void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 47 }, this)), (0, jsx_dev_runtime_1.jsxDEV)(AddDistrictComment_1.default, { id: districtParams.districtId }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 7 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 11 }, this));
};
exports.default = ShowDistrict;
