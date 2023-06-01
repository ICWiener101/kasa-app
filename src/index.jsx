import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/';
import Nav from './components/Nav/';
import Header from './components/Header/index';
import './styles/GlobalStyles.scss';
import Error from './pages/Error/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Router>
                  <Nav />
                  <Header />
                  <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<Error />} />
                  </Routes>
                  <Footer />
            </Router>
      </React.StrictMode>
);
