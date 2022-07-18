"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Main() {
    return (react_1.default.createElement("div", { className: 'main' },
        react_1.default.createElement("h1", null, "Grade School"),
        react_1.default.createElement("img", { src: 'https://gradepowerlearning.com/wp-content/uploads/2017/08/AdobeStock_104330101.jpeg', alt: 'School desk with apple and supplies' }),
        react_1.default.createElement("h3", null, "California's Premier Ranking App for Schools and Districts")));
}
exports.default = Main;
