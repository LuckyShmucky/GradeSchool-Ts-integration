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
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/EditComment.tsx";
const react_1 = require("react");
const NavBar_1 = __importDefault(require("./NavBar"));
const Footer_1 = __importDefault(require("./Footer"));
function EditCommentForm(id) {
    const [content, setContent] = (0, react_1.useState)('');
    const [author, setAuthor] = (0, react_1.useState)('');
    const [stars, setStars] = (0, react_1.useState)(3);
    const handleClick = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/schools/updateComments/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "content": content,
                "author": author,
                "stars": stars
            })
        });
        const string = yield response.json();
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'comment-edit' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(NavBar_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("form", { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginTop: '25px' } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'content' }, { children: "Content" }), void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 21 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginTop: '25px' } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("textarea", { id: 'content', name: 'content', className: 'form-control', onChange: (e) => setContent(e.target.value) }, void 0, false, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 21 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginTop: '25px', marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'author', style: { marginRight: '25px' } }, { children: "Author" }), void 0, false, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 25 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { type: 'text', id: 'author', name: 'author', className: 'form-control', onChange: (e) => setAuthor(e.target.value) }, void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 25 }, this), (0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'stars', style: { marginRight: '25px', marginLeft: '25px' } }, { children: "Star Rating" }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 25 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { type: 'range', min: '1', max: '5', step: '0.5', name: 'stars', id: 'stars', className: 'form-control', onChange: (e) => setStars(parseInt(e.target.value)) }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 25 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { style: { marginBottom: '25px', borderRadius: '15px', padding: '10px' }, type: "submit", value: "Edit Comment", onClick: handleClick }, void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 21 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)(Footer_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 13 }, this));
}
exports.default = EditCommentForm;
