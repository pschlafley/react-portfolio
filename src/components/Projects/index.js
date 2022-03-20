import { React, useState } from 'react';
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
            name: 'Tune Out',
            src: tuneOut,
            alt: '',
            technologies: ['HTML / CSS / JavaScript / JQuery  Materialize / Taste Dive Api / NYT Api'],
            url: 'https://bspiewak6.github.io/music/',
            github: 'https://github.com/bspiewak6/music'
        },
        {
            name: 'Simply ReUse',
            src: simplyReuse,
            alt: ``,
            technologies: ['Node.js / Express.js / JavaScript / MySQL Sequelize / Handlebars / bcrypt / dotenv  fuse.js / CSS'],
            url: 'https://simplyreuse3.herokuapp.com/',
            github: 'https://github.com/pschlafley/Simply-ReUse'
        },
        {
            name: 'Weather Dashboard',
            src: WD,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / JQuery / Bootstrap / OpenWeather Api'],
            url: 'https://pschlafley.github.io/weatherDashboard/',
            github: 'https://github.com/pschlafley/weatherDashboard'
        },
        {
            name: 'Work Day Scheduler',
            src: workDay,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / JQuery'],
            url: 'https://pschlafley.github.io/Scheduler/',
            github: 'https://github.com/pschlafley/Scheduler'
        },
        {
            name: 'Budget Tracker',
            src: budget,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / MongoDB / Mongoose / Express.js '],
            url: 'https://budget-tracker100.herokuapp.com/',
            github: 'https://github.com/pschlafley/budget-tracker'
        },
        {
            name: 'Web Dev Blogs',
            src: webDevBlogs,
            alt: ``,
            technologies: ['HTML / CSS / JavaScript / bcrypt / connect-session-sequelize / express-handlebars / express-session / mysql2  Sequelize'],
            url: 'https://web-dev-blogs.herokuapp.com/',
            github: 'https://github.com/pschlafley/Tech-Blog'
        },
        {
            name: 'Lite Speed',
            src: liteSpeed,
            alt: ``,
            technologies: ['CSS / JavaScript / bcrypt / React / MongoDB / Mongoose / Apollo / Express / JWT / Concurrently / GraphQL / React-Router / React-bootstrap  '],
            url: 'https://lite-speed.herokuapp.com/',
            github: 'https://github.com/pschlafley/lite-speed'
        }
    ]

    const [displayTxt, setDisplayTxt] = useState(false);

    const handleDisplay = () => {
        setDisplayTxt(true);
    };

    const hideElem = () => {
        setDisplayTxt(false)
    }

    return (
        <>
            <div className={s.projectsContainer}>
                {projects.map((project, i) => (
                    <div className={s.projectCarWapper}>
                        <div className={s.card}>
                            <img
                                className={s.pics}
                                src={project.src}
                                alt={project.alt}
                                key={i}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;