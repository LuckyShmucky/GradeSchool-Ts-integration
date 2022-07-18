import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import District_Form from './views/DistrictForm';
import School_Form from './views/SchoolForm';
import District from './views/Pages/District';
import School from './views/Pages/School';
import EditSchool from './views/Pages/EditSchool';
import EditDistrict from './views/Pages/EditDistrict';
import Show from './views/Pages/Show';
import EditComment from './views/EditComment';
import ShowDistrict from './views/Pages/ShowDistrict';
import Main from './views/Main';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/districts" element={<District />} />
        <Route path="/schools" element={<School />} />
        <Route path="/district-form" element={<District_Form />} />
        <Route path="/school-form" element={<School_Form />} />
        <Route path="/edit-school-review/:schoolId" element={<EditSchool />} />
        <Route path="/edit-district-review/:districtId" element={<EditDistrict />} />
        <Route path="/show-page/:schoolId" element={<Show />} />
        <Route path="/district-show-page/:districtId" element={<ShowDistrict />} />
        <Route path="/edit-comment" element={<EditComment />} />
        <Route path="*" element={<main style={{padding: '1rem'}}><p>There's no there there!</p></main>} />

    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
