import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Router>
                  <Routes>
                        <Route path="/" element={<HomePage />} />
                  </Routes>
            </Router>
      </React.StrictMode>
);
