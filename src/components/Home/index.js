import React from "react";
import s from './home.module.css';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className={s.backgroundColor}>
            <h1>
                Hello World
            </h1>
            <Link to={'/About-Me'}>
                <h2>About Me</h2>
            </Link>
        </div>
    )
}

export default Home;