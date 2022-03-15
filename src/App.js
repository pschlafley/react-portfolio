import { React, useState } from 'react';
import Home from './components/Home';
import './app.css'
import Footer from './components/Footer';
import NavBar from './components/Nav';

function App() {

  const [scrollTop, setScrollTop] = useState(0);

  const getTopScroll = () => {
    const top = document.getElementById("content-wrap").scrollTop;
    setScrollTop(top);
  };

  return (
    <div onScroll={getTopScroll} id='content-wrap' className='content-wrap'>
      <div>
        <NavBar scroll={scrollTop} />
      </div>
      <div>
        <Home />
      </div>
      <div className={scrollTop < 380 ? 'hide-footer' : 'foot-container'}>
        <Footer />
      </div>
    </div >
  );
}

export default App;