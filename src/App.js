import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import React, { useState } from 'react';

function App() {

  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Header>
        <Footer />
      </div>
    </div>
  );
}

export default App;
