import React from "react";
import s from './about.module.css';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className={s.backgroundColor}>
            <h1>This is About Me Page</h1>

            <Link to='/'>Home</Link>
        </div>
    )
}

export default About;