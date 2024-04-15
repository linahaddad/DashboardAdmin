import React from 'react';
import ReactDOM from 'react-dom/client'; // Importez createRoot depuis "react-dom/client"
import { BrowserRouter as Router } from 'react-router-dom'; // Importez BrowserRouter
import AppRoutes from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppRoutes />
  </Router>
);
