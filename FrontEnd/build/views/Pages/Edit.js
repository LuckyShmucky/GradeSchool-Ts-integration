"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Edit = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "card" }),
        react_1.default.createElement("div", { className: "" },
            react_1.default.createElement("h1", null, "Edit"),
            react_1.default.createElement("form", { method: "POST", action: "/schools" },
                react_1.default.createElement("div", { className: "" },
                    react_1.default.createElement("label", { htmlFor: "school" }, "Select School"),
                    react_1.default.createElement("select", { name: "school", className: "schoolList" },
                        react_1.default.createElement("option", { value: "Cesar Chavez Middle School" }, "Cesar Chavez Middle School"),
                        react_1.default.createElement("option", { value: "Del Rio Elementary School\n              " }, "Del Rio Elementary School"),
                        react_1.default.createElement("option", { value: "El Camino High School\n              " }, "El Camino High School"),
                        react_1.default.createElement("option", { value: "Foussat Elementary School" }, "Foussat Elementary School"))),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "district" }, "Select District"),
                    react_1.default.createElement("select", { name: "district", className: "districtList" },
                        react_1.default.createElement("option", { value: "Oceanside Unified School District" }, "Oceanside Unified School District"),
                        react_1.default.createElement("option", { value: "San Diego Unified School District\n              " }, "San Diego Unified School District"),
                        react_1.default.createElement("option", { value: "LA Unified\n              " }, "LA Unified"),
                        react_1.default.createElement("option", { value: "Sweetwater Unified School Distric" }, "Sweetwater Unified School District"))),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "city" }, "City"),
                    react_1.default.createElement("input", { className: "form-control", id: "city", name: "city" })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "state" }, "State"),
                    react_1.default.createElement("input", { className: "form-control", id: "state", name: "state" })),
                react_1.default.createElement("input", { className: "button", type: "submit", value: "Add a School Review" })))));
};
exports.default = Edit;
