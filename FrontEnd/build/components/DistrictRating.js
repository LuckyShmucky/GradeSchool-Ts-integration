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
const _jsxFileName = "C:/Users/xian/AT-Assignments/GradeSchool-Ts-integration/FrontEnd/src/components/DistrictRating.tsx";
const react_1 = require("react");
const DistrictStars = (props) => {
    // const [stars, setStars] = useState([]) 
    const [starArr, setStarArr] = (0, react_1.useState)([]);
    let initialStarArr;
    const [rating, setRating] = (0, react_1.useState)('Not yet Rated');
    // this runs on mount
    (0, react_1.useEffect)(() => {
        //fetching an individual school by an id that is passed by props and is populated by its comments
        const getDistricts = () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch(`https://back-end-for-grade-school.herokuapp.com/districts/${props.id}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const districtPopulated = yield response.json();
            console.log(props);
            console.log(districtPopulated);
            //mapping out all the comments and pushing the stars number to initialStarArr
            districtPopulated.data.comments.map(function (comment) {
                initialStarArr.push(comment.stars);
            });
            //setting state to the array with all the pushed numbers
            setStarArr(initialStarArr);
        });
        getDistricts();
    }, []);
    (0, react_1.useEffect)(() => {
        console.log(starArr);
        //please see Christian if this is too much to read
        let stars = '';
        if (starArr.length >= 1) {
            let sum = 0;
            // let sumOfRatings = starArr.map(star => {
            //   let sum = 0
            //   sum += star
            //   console.log(sum)
            // })
            for (let i = 0; i < starArr.length; i++) {
                sum += starArr[i];
            }
            let averageRating = sum / starArr.length;
            // console.log(averageRating)
            //  averageRating.map(star => {
            //    stars += "⭐️";
            //  })
            for (let i = 0; i < averageRating; i++) {
                stars += '⭐';
            }
            console.log(stars);
            setRating(stars);
        }
        console.log(stars);
    }, [starArr]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", { children: rating }, void 0, false, { fileName: _jsxFileName, lineNumber: 67, columnNumber: 11 }, this));
};
exports.default = DistrictStars;
