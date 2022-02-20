import React from "react";
import s from './about.module.css';
import NavBar from "../Nav";

const About = () => {
    return (
        <>
            <div className={s.backgroundColor}>
                <NavBar />
                <h1>About</h1>
            </div>
        </>
    )
}

export default About;