import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './nav.module.css';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si"



const NavBar = (props) => {
    let windowPath = useLocation().pathname;

    const homeDisplayed = windowPath === '/' ? true : false;
    const projectDisplayed = windowPath === '/projects' ? true : false;

    let scrollPos = props.scroll;

    const [displayEmail, setdisplayEmail] = useState(false)

    const handleHover = () => {
        setdisplayEmail(true);
    }

    const handleMouseOut = () => {
        setdisplayEmail(false);
    }

    return (
        <div className={scrollPos > 60 ? `${s.navContainer} ${s.navBg}` : `${s.navContainer}`}>
            <div className={s.navChild}>
                <div className={s.iconWrap}>
                    <i onMouseEnter={handleHover} onMouseLeave={handleMouseOut} className={`${s.myIcon}`}>
                        <SiMinutemailer />
                    </i>
                    <a rel='noreferrer' referrer="no-referrer" target="_blank" href='https://github.com/pschlafley'>
                        <i className={s.myIcon}>
                            <FaGithub />
                        </i>
                    </a>
                    <a rel='noreferrer' referrer="no-referrer" target="_blank" href='https://www.linkedin.com/in/peyton-schlafley-81125a1b1/'>
                        <i alt="click here to visit my linkedin profile" className={s.myIcon}>
                            <FaLinkedinIn />
                        </i>
                    </a>
                </div>
                <p className={!displayEmail ? `${s.hide}` : `${s.email}`}>
                    psjobs234@gmail.com
                </p>
            </div>

            <div className={s.navChild}>
                <Link id='home' className={s.Link} to='/'>
                    <h3 className={homeDisplayed ? `${s.navActive}` : `${s.linkChild}`}>About Me</h3>
                </Link>
                <Link id='projects' className={s.Link} to='/projects'>
                    <h3 className={projectDisplayed ? `${s.navActive}` : `${s.linkChild}`}>My Projects</h3>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;