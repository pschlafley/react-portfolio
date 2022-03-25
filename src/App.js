import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './app.css'
import NavBar from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const getTopScroll = () => {
    const top = document.getElementById("content-wrap").scrollTop;
    setScrollTop(top);
  };

  return (
    <div onScroll={getTopScroll} id='content-wrap' className='content-wrap'>
      <NavBar scroll={scrollTop} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact-me' element={<Contact />} />
      </Routes>
    </div >
  );
}

export default App;