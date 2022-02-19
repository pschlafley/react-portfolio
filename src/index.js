import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/About-Me' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);