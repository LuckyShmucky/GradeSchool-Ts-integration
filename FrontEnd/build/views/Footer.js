"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Footer() {
    return (react_1.default.createElement("div", { className: 'footer' },
        react_1.default.createElement("p", null, "Copyright \u00A9 2022 of Christian Luciano, Amanda Woods, and Craig Caparraz"),
        react_1.default.createElement("p", null, "Image courtesy of AdobeStock_104330101")));
}
exports.default = Footer;
