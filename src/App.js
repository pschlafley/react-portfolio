import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {

  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className='grid-container'>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
    </div>
  );
}

export default App;
