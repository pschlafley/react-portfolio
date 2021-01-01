import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import ContactForm from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import React, { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    switch (currentPage) {
      case 'Contact Me':
        return <ContactForm />;
      case 'Portfolio':
        return <Project />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />
    }
  };

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Header>
        {renderPage(currentPage)}
        <Footer />
      </div>
    </div>
  );
}

export default App;