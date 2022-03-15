import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact-me' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);