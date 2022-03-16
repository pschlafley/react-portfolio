import { React, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import './app.css'
import Footer from './components/Footer';
import NavBar from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  const location = useLocation().pathname;

  const [scrollTop, setScrollTop] = useState(0);

  const getTopScroll = () => {
    const top = document.getElementById("content-wrap").scrollTop;
    setScrollTop(top);
  };

  return (
    <div onScroll={getTopScroll} id='content-wrap' className='content-wrap'>
      <NavBar scroll={scrollTop} />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact-me' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <div className={scrollTop < 380 ? 'hide-footer' : 'foot-container'}>
        <Footer />
      </div>
    </div >
  );
}

export default App;