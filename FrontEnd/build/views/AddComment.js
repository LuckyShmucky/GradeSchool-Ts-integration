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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/views/AddComment.tsx";
const react_1 = require("react");
function AddCommentForm(props) {
    const [content, setContent] = (0, react_1.useState)('');
    const [author, setAuthor] = (0, react_1.useState)('Anonymous');
    const [stars, setStars] = (0, react_1.useState)(3);
    const handleClick = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/schools/${props.id}`, {
            method: 'POST',
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
        console.log(string);
        console.log(props);
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'comment-add' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("form", { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginTop: '25px' } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'content' }, { children: "Content" }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 21 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginTop: '25px' } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("textarea", { id: 'content', name: 'content', className: 'form-control', onChange: event => setContent(event.target.value) }, void 0, false, { fileName: _jsxFileName, lineNumber: 31, columnNumber: 21 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: 'row', style: { marginTop: '25px', marginBottom: '25px' } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'author', style: { marginRight: '25px' } }, { children: "Author" }), void 0, false, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 25 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { type: 'text', id: 'author', name: 'author', className: 'form-control', onChange: event => setAuthor(event.target.value) }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 25 }, this), (0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: 'stars', style: { marginRight: '25px', marginLeft: '25px' } }, { children: "Star Rating" }), void 0, false, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 25 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { type: 'range', min: '1', max: '5', step: '0.5', name: 'stars', id: 'stars', className: 'form-control', onChange: event => setStars(parseInt(event.target.value)) }, void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 25 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", { style: { marginBottom: '25px', borderRadius: '15px', padding: '10px' }, type: "submit", value: "Add Comment", onClick: event => {
                        event.preventDefault();
                        handleClick();
                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 21 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 13 }, this));
}
exports.default = AddCommentForm;
