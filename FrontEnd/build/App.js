"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/App.tsx";
//import "./App.css";
require("./css/style.css");
const NavBar_1 = __importDefault(require("./views/NavBar"));
const Main_1 = __importDefault(require("./views/Main"));
const Footer_1 = __importDefault(require("./views/Footer"));
function App() {
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: "App" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Main_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 11 }, this));
}
exports.default = App;
