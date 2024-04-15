import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Orthophonistes from '../files/Orthophonistes/index.js';
import Patients from '../files/Patients';
import UpdatePatientForm from '../files/Patients/update.js';
import UpdateOrthoForm from '../files/Orthophonistes/update.js';
import App from '../App';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/orthophonistes" element={<Orthophonistes />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/patients/:id" element={<UpdatePatientForm />} />
      <Route path='/orthophonistes/:id' element={<UpdateOrthoForm/>} />
    </Routes>
  );
}

export default AppRoutes;
