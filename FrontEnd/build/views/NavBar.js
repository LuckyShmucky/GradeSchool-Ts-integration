"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function NavBar() {
    return (react_1.default.createElement("div", { className: 'nav' },
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/districts" }, "Districts")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/schools" }, "Schools")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/district-form" }, "Add a District")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/school-form" }, "Add a School"))),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
}
exports.default = NavBar;
