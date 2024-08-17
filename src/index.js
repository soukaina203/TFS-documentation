import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route key={1} path='/' element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
