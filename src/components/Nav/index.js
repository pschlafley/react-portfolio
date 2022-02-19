import React from 'react';
import { Link } from 'react-router-dom';
import s from './nav.module.css';


const NavBar = () => {
    return (
        <div className={s.container}>
            <Link to='/About-Me'><h3>About Me</h3></Link>
        </div>
    );
};

export default NavBar;