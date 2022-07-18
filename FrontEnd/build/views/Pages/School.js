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
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/Pages/School.tsx";
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Rating_1 = __importDefault(require("../../components/Rating"));
const NavBar_1 = __importDefault(require("../NavBar"));
const Footer_1 = __importDefault(require("../Footer"));
const School = () => {
    const [listOfSchools, setListOfSchools] = (0, react_1.useState)([]);
    const [totalSchools, setTotalSchools] = (0, react_1.useState)(0);
    //this use effect makes enables the page to fetch all the schools on mount 
    (0, react_1.useEffect)(() => {
        const getAllSchools = () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/schools`);
            const allSchools = yield response.json();
            const foundSchools = allSchools.data;
            setListOfSchools(foundSchools);
            setTotalSchools(listOfSchools.length);
        });
        getAllSchools();
    }, []);
    const deleteSchool = (schoolId) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${schoolId}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const deletedSchool = yield response.json();
    });
    const schoolNamesMapped = listOfSchools.map((school, key) => {
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: "card" }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: "school-content row-auto" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("h1", { children: (0, jsx_dev_runtime_1.jsxDEV)(react_router_dom_1.Link, Object.assign({ to: `/show-page/${school.id}` }, { children: school.name }), void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Rating_1.default, { id: school.id }, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("img", { placeholder: "https://placekitten.com/300/300" }, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: "schoolContent" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(react_router_dom_1.Link, Object.assign({ to: `/edit-school-review/${school.id}`, state: { stateParam: true } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("button", Object.assign({ type: "submit", style: {
                                        marginBottom: "25px",
                                        borderRadius: "15px",
                                        padding: "10px",
                                    } }, { children: "Edit School" }), void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)(react_router_dom_1.Outlet, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)("button", Object.assign({ type: "submit", style: {
                                    marginLeft: "5px",
                                    marginBottom: "25px",
                                    borderRadius: "15px",
                                    padding: "10px",
                                }, onClick: e => {
                                    e.preventDefault();
                                    deleteSchool(school.id);
                                    setTotalSchools(totalSchools - 1);
                                } }, { children: "Delete" }), void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 5 }, this) }), key, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 12 }, this));
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)("body", { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: "school" }, { children: [schoolNamesMapped, " "] }), void 0, true, { fileName: _jsxFileName, lineNumber: 91, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 92, columnNumber: 7 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 11 }, this));
};
exports.default = School;
