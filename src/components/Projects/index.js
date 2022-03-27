import React from 'react';
import tuneOut from '../../assets/images/tune-out.png'
import simplyReuse from '../../assets/images/simplyreuse.png';
import WD from '../../assets/images/weather-dashboard.png';
import workDay from '../../assets/images/work-day-scheduler.png';
import budget from '../../assets/images/budget-tracker.png';
import webDevBlogs from '../../assets/images/dashboard.png';
import liteSpeed from '../../assets/images/lite-speed.png';
import s from './projects.module.css'
import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from 'framer-motion';

const Projects = () => {

    const projects = [
        {
            id: '1',
            name: 'Tune Out',
            src: tuneOut,
            alt: 'Tune Out Landing Page',
            technologies: ['HTML / CSS / JavaScript / JQuery  Materialize / Taste Dive Api / NYT Api'],
            url: 'https://bspiewak6.github.io/music/',
            github: 'https://github.com/bspiewak6/music'
        },
        {
            id: '2',
            name: 'Simply ReUse',
            src: simplyReuse,
            alt: `Simply ReUse Landing Page`,
            technologies: ['Node.js / Express.js / JavaScript / MySQL Sequelize / Handlebars / bcrypt / dotenv  fuse.js / CSS'],
            url: 'https://simplyreuse3.herokuapp.com/',
            github: 'https://github.com/pschlafley/Simply-ReUse'
        },
        {
            id: '3',
            name: 'Weather Dashboard',
            src: WD,
            alt: `Weather Dashboard Landing Page`,
            technologies: ['HTML / CSS / JavaScript / JQuery / Bootstrap / OpenWeather Api'],
            url: 'https://pschlafley.github.io/weatherDashboard/',
            github: 'https://github.com/pschlafley/weatherDashboard'
        },
        {
            id: '4',
            name: 'Work Day Scheduler',
            src: workDay,
            alt: `Work Day Scheduler Landing Page`,
            technologies: ['HTML / CSS / JavaScript / JQuery'],
            url: 'https://pschlafley.github.io/Scheduler/',
            github: 'https://github.com/pschlafley/Scheduler'
        },
        {
            id: '5',
            name: 'Budget Tracker',
            src: budget,
            alt: `Budget Tracker Landing Page`,
            technologies: ['HTML / CSS / JavaScript / MongoDB / Mongoose / Express.js '],
            url: 'https://budget-tracker100.herokuapp.com/',
            github: 'https://github.com/pschlafley/budget-tracker'
        },
        {
            id: '6',
            name: 'Web Dev Blogs',
            src: webDevBlogs,
            alt: `Web Dev Blogs Landing Page`,
            technologies: ['HTML / CSS / JavaScript / bcrypt / connect-session-sequelize / express-handlebars / express-session / mysql2  Sequelize'],
            url: 'https://web-dev-blogs.herokuapp.com/',
            github: 'https://github.com/pschlafley/Tech-Blog'
        },
        {
            id: '7',
            name: 'Lite Speed',
            src: liteSpeed,
            alt: `Lite Speed Landing Page`,
            technologies: ['CSS / JavaScript / bcrypt / React / MongoDB / Mongoose / Apollo / Express / JWT / Concurrently / GraphQL / React-Router / React-bootstrap  '],
            url: 'https://lite-speed.herokuapp.com/',
            github: 'https://github.com/pschlafley/lite-speed'
        }
    ]


    return (
        <>
            <motion.div
                className={s.projectsContainer}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 25,
                    mass: 5,
                    ease: 'easeIn'
                }}
            >
                {projects.map((projects, i) => (
                    <div className={s.card} key={projects.id}>
                        <img
                            id={projects.id}
                            className={`${s.pics}`}
                            src={projects.src}
                            alt={projects.alt}
                        />
                        <div className={s.cardContent}>
                            <h3 className={s.cardHeader}>{projects.name}</h3>
                            <div className={s.description}>
                                <p>{projects.technologies}</p>
                            </div>
                            <div className={s.links}>
                                <a rel='noreferrer' referrer="no-referrer" target="_blank" href={projects.github}>
                                    <i className={s.myIcon}>
                                        <FaGithub />
                                    </i>
                                </a>
                                <a rel='noreferrer' referrer="no-referrer" target="_blank" href={projects.url}>
                                    <i className={s.myIcon}>
                                        <FaGlobe />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Projects;