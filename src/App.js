import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import ContactForm from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';
import Resume from './pages/Resume';
import HomePage from './pages/Homepage';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='page-container'>
        <div className='content-wrap'>
          <Header />

          <Switch>
            <Route exact path='/about-me' component={About} />
            <Route exact path='/portfolio' component={Project} />
            <Route exact path='/contact-me' component={ContactForm} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/' component={HomePage} />
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;