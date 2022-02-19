import React from 'react';
import { Link } from 'react-router-dom';
import s from './nav.module.css';


const NavBar = () => {
    return (
        <div className={s.navContainer}>
            <Link className={s.link} to='/About-Me'>
                <button className={s.linkChild}>About Me</button>
            </Link>
            <Link className={s.link} to='/Projects'>
                <button className={s.linkChild}>My Projects</button>
            </Link>
        </div>
    );
};

export default NavBar;