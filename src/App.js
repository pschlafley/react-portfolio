import React from 'react';
import { Switch } from 'react-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' component={<Home />} />
          <Route path='/About-Me' component={<About />} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;