import { React, useState, useEffect } from 'react';
import NavBar from './components/Nav';
import Home from './components/Home';
import './app.css'

function App() {

  return (
    <div>
      <NavBar />
      <Home />
    </div >
  );
}

export default App;