"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import "./App.css";
require("./css/style.css");
var NavBar_1 = __importDefault(require("./views/NavBar"));
var Main_1 = __importDefault(require("./views/Main"));
var Footer_1 = __importDefault(require("./views/Footer"));
var react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(NavBar_1.default, null),
        react_1.default.createElement(Main_1.default, null),
        react_1.default.createElement(Footer_1.default, null)));
}
exports.default = App;
//D86FA3 text color
//fcf0cc background
//100406 accent
