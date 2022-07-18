"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var react_router_dom_1 = require("react-router-dom");
var DistrictForm_1 = __importDefault(require("./views/DistrictForm"));
var SchoolForm_1 = __importDefault(require("./views/SchoolForm"));
var District_1 = __importDefault(require("./views/Pages/District"));
var School_1 = __importDefault(require("./views/Pages/School"));
var EditSchool_1 = __importDefault(require("./views/Pages/EditSchool"));
var EditDistrict_1 = __importDefault(require("./views/Pages/EditDistrict"));
var Show_1 = __importDefault(require("./views/Pages/Show"));
var EditComment_1 = __importDefault(require("./views/EditComment"));
var ShowDistrict_1 = __importDefault(require("./views/Pages/ShowDistrict"));
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(App_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/districts", element: react_1.default.createElement(District_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/schools", element: react_1.default.createElement(School_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/district-form", element: react_1.default.createElement(DistrictForm_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/school-form", element: react_1.default.createElement(SchoolForm_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/edit-school-review/:schoolId", element: react_1.default.createElement(EditSchool_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/edit-district-review/:districtId", element: react_1.default.createElement(EditDistrict_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/show-page/:schoolId", element: react_1.default.createElement(Show_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/district-show-page/:districtId", element: react_1.default.createElement(ShowDistrict_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/edit-comment", element: react_1.default.createElement(EditComment_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement("main", { style: { padding: '1rem' } },
                react_1.default.createElement("p", null, "There's no there there!")) }))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)(console.log);
