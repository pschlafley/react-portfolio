import React from 'react';
import { Link } from 'react-router-dom';
import s from './nav.module.css';


const NavBar = () => {

    let windowPath = window.location.pathname;

    const homeDisplayed = windowPath === '/' ? true : false;
    const aboutDisplayed = windowPath === '/about-me' ? true : false;
    const projectDisplayed = windowPath === '/projects' ? true : false;

    return (
        <div className={s.navContainer}>
            <>
                <Link id='home' className={s.Link} to='/'>
                    <h3 className={homeDisplayed ? `${s.hideHome}` : `${s.linkChild}`}>Home</h3>
                </Link>
                <Link id='about-me' className={s.Link} to='/about-me'>
                    <h3 className={aboutDisplayed ? `${s.hideAbout}` : `${s.linkChild}`}>About Me</h3>
                </Link>
                <Link id='projects' className={s.link} to='/projects'>
                    <h3 className={projectDisplayed ? `${s.hideProject}` : `${s.linkChild}`}>My Projects</h3>
                </Link>
            </>
        </div >
    );
};

export default NavBar;