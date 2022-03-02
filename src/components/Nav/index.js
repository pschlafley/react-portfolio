import React from 'react';
import { Link } from 'react-router-dom';
import s from './nav.module.css';


const NavBar = (props) => {
    let windowPath = window.location.pathname;

    const homeDisplayed = windowPath === '/' ? true : false;
    const contactDisplayed = windowPath === '/contact-me' ? true : false;
    const projectDisplayed = windowPath === '/projects' ? true : false;

    let scrollPos = props.scroll;
    return (
        <div className={scrollPos > 60 ? `${s.navContainer} ${s.navBg}` : `${s.navContainer}`}>
            <div className={s.navChild}>
                pschlafley0@gmail.com
            </div>
            <div className={s.navChild}>
                <Link id='home' className={s.Link} to='/'>
                    <h3 className={homeDisplayed ? `${s.navActive}` : `${s.linkChild}`}>Home</h3>
                </Link>
                <Link id='projects' className={s.Link} to='/projects'>
                    <h3 className={projectDisplayed ? `${s.navActive}` : `${s.linkChild}`}>My Projects</h3>
                </Link>
                <Link id='about-me' className={s.Link} to='/contact-me'>
                    <h3 className={contactDisplayed ? `${s.navActive}` : `${s.linkChild}`}>Contact</h3>
                </Link>
            </div>
        </div >
    );
};

export default NavBar;