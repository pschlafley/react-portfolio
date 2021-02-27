import React from 'react';
import tuneOut from '../images/tune-out.png'
import simplyReuse from '../images/simplyreuse.png';
import WD from '../images/weather-dashboard.png';
import workDay from '../images/work-day-scheduler.png';
import budget from '../images/budget-tracker.png';
import webDevBlogs from '../images/dashboard.png';

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
]

const Project = () => {
    return (
        <div>
            <div className='pt-4'>
                <h1 className='section-title my-5 px-2 cs-2'>Projects</h1>
            </div>
            <div className='project-card-wrapper'>
                {projects.map((project, i) => (
                    <div className='card background-color my-5' key={i}>
                        <img
                            src={project.src}
                            alt={project.alt}
                            className='w-100'
                        />
                        <div className='container pt-5'>
                            <h4><b>{project.name}</b></h4>
                            <ul className='p-3'>
                                <h5 className='technologies font-weight-light'>Technologies</h5>
                                <li className='technologies list-style font-weight-light'>{project.technologies}</li>
                            </ul>
                            <a className='project-link btn' href={project.url} target='_blank' rel='noreferrer'>
                                Visit Page
                                </a>

                            <a className='project-link btn ml-3' href={project.github} target='_blank' rel='noreferrer'>Github Repo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;