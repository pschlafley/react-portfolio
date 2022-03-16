import React from 'react';
import NavBar from '../Nav';
import s from './projects.module.css'

const Projects = () => {
    // const wrap = document.getElementById('content-wrap');
    // console.log(wrap)
    return (
        // <div className={s.backgroundColor}>
        <>
            <NavBar />
            <div className={s.projectsContainer}>
                <div className={s.item1}>Hello</div>
                <div className={s.item2}>Hello</div>
                <div className={s.item3}>Hello</div>
                <div className={s.item4}>Hello</div>
                <div className={s.item5}>Hello</div>
                <div className={s.item6}>Hello</div>
            </div>
        </>
        // </div>
    );
};

export default Projects;