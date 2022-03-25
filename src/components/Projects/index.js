import { React, useState, useEffect } from 'react';
import tuneOut from '../../assets/images/tune-out.png'
import simplyReuse from '../../assets/images/simplyreuse.png';
import WD from '../../assets/images/weather-dashboard.png';
import workDay from '../../assets/images/work-day-scheduler.png';
import budget from '../../assets/images/budget-tracker.png';
import webDevBlogs from '../../assets/images/dashboard.png';
import liteSpeed from '../../assets/images/lite-speed.png';
import s from './projects.module.css'

const Projects = () => {

    const projects = [
        {
            id: '1',
            name: 'Tune Out',
            src: tuneOut,
            alt: '',
            technologies: ['HTML / CSS / JavaScript / JQuery  Materialize / Taste Dive Api / NYT Api'],
            url: 'https://bspiewak6.github.io/music/',
            github: 'https://github.com/bspiewak6/music'
        },
        {
            id: '2',
            name: 'Simply ReUse',
            src: simplyReuse,
            alt: ``,
            technologies: ['Node.js / Express.js / JavaScript / MySQL Sequelize / Handlebars / bcrypt / dotenv  fuse.js / CSS'],
            url: 'https://simplyreuse3.herokuapp.com/',
            github: 'https://github.com/pschlafley/Simply-ReUse'
        },
        {
            id: '3',
            name: 'Weather Dashboard',
            src: WD,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / JQuery / Bootstrap / OpenWeather Api'],
            url: 'https://pschlafley.github.io/weatherDashboard/',
            github: 'https://github.com/pschlafley/weatherDashboard'
        },
        {
            id: '4',
            name: 'Work Day Scheduler',
            src: workDay,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / JQuery'],
            url: 'https://pschlafley.github.io/Scheduler/',
            github: 'https://github.com/pschlafley/Scheduler'
        },
        {
            id: '5',
            name: 'Budget Tracker',
            src: budget,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / MongoDB / Mongoose / Express.js '],
            url: 'https://budget-tracker100.herokuapp.com/',
            github: 'https://github.com/pschlafley/budget-tracker'
        },
        {
            id: '6',
            name: 'Web Dev Blogs',
            src: webDevBlogs,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / bcrypt / connect-session-sequelize / express-handlebars / express-session / mysql2  Sequelize'],
            url: 'https://web-dev-blogs.herokuapp.com/',
            github: 'https://github.com/pschlafley/Tech-Blog'
        },
        {
            id: '7',
            name: 'Lite Speed',
            src: liteSpeed,
            alt: ``,
            technologies: ['CSS / JavaScript / bcrypt / React / MongoDB / Mongoose / Apollo / Express / JWT / Concurrently / GraphQL / React-Router / React-bootstrap  '],
            url: 'https://lite-speed.herokuapp.com/',
            github: 'https://github.com/pschlafley/lite-speed'
        }
    ]



    return (
        <>
            <div className={s.projectsContainer}>
                <div className={s.card}>
                    <img
                        id={projects[0].id}
                        className={`${s.pics}`}
                        src={projects[0].src}
                        alt={projects[0].alt}
                    />
                    <div className={s.cardContent}>
                        <h3 className={s.cardHeader}>{projects[0].name}</h3>
                        <div className={s.description}>
                            <p>{projects[0].technologies}</p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <img
                        id={projects[1].id}
                        className={`${s.pics}`}
                        src={projects[1].src}
                        alt={projects[1].alt}
                    />
                    <div className={s.cardContent}>
                        <h3 className={s.cardHeader}>{projects[1].name}</h3>
                        <div className={s.description}>
                            <p>{projects[1].technologies}</p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <img
                        id={projects[2].id}
                        className={`${s.pics}`}
                        src={projects[2].src}
                        alt={projects[2].alt}
                    />
                    <div className={s.cardContent}>
                        <h3 className={s.cardHeader}>{projects[2].name}</h3>
                        <div className={s.description}>
                            <p>{projects[2].technologies}</p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <img
                        id={projects[3].id}
                        className={`${s.pics}`}
                        src={projects[3].src}
                        alt={projects[3].alt}
                    />
                    <div className={s.cardContent}>
                        <h3 className={s.cardHeader}>{projects[3].name}</h3>
                        <div className={s.description}>
                            <p>{projects[3].technologies}</p>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <img
                        id={projects[4].id}
                        className={`${s.pics}`}
                        src={projects[4].src}
                        alt={projects[4].alt}
                    />
                    <div className={s.cardContent}>
                        <h3 className={s.cardHeader}>{projects[4].name}</h3>
                        <div className={s.description}>
                            <p>{projects[4].technologies}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;