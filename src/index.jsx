import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/';
import Nav from './components/Nav/';
import Header from './components/Header/index';
import Error from './pages/Error/index';
import './styles/globalStyles.scss';
import About from './pages/About/Index';
import Details from './pages/Details/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Router>
                  <Nav />
                  <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<Error />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/details/:id" element={<Details />} />
                  </Routes>
                  <Footer />
            </Router>
      </React.StrictMode>
);
