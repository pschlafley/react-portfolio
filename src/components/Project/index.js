import React from 'react';
import tuneOut from '../../images/tune-out.png'
import simplyReuse from '../../images/simplyreuse.png';
import WD from '../../images/weather-dashboard.png';
import workDay from '../../images/work-day-scheduler.png';
import budget from '../../images/budget-tracker.png';
import justTechNews from '../../images/just-tech.png';
import webDevBlogs from '../../images/dashboard.png';

const projects = [
    {
        name: 'Tune Out',
        src: tuneOut,
        alt: '',
        description: "TuneOut Entertainment App -- This application was a group project for UPenn Coding Bootcamp that features API's from TasteDive and NY Times.The user base and audience are those who need to tune out every now and then to catch their breath and enjoy some entertaining musicians, artists, authors, podcasts and video games.",
        technologies: ['HTML, CSS, JavaScript'],
        url: 'https://bspiewak6.github.io/music/',
        github: 'https://github.com/bspiewak6/music'
    },
    {
        name: 'Simply ReUse',
        src: simplyReuse,
        alt: ``,
        description: "TuneOut Entertainment App -- This application was a group project for UPenn Coding Bootcamp that features API's from TasteDive and NY Times.The user base and audience are those who need to tune out every now and then to catch their breath and enjoy some entertaining musicians, artists, authors, podcasts and video games.",
        technologies: ['Node.js, Express.js, JavaScript, MySQL, Sequelize, Handlebars, bcrypt, dotenv, fuse.js, CSS'],
        url: 'https://simplyreuse3.herokuapp.com/',
        github: 'https://github.com/pschlafley/Simply-ReUse'
    },
    {
        name: 'Weather Dashboard',
        src: WD,
        alt: ``,
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        technologies: ['HTML, CSS, JavaScript'],
        url: 'https://pschlafley.github.io/weatherDashboard/',
        github: 'https://github.com/pschlafley/weatherDashboard'
    },
    {
        name: 'Work Day Scheduler',
        src: workDay,
        alt: ``,
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        technologies: ['HTML, CSS, JavaScript'],
        url: 'https://pschlafley.github.io/Scheduler/',
        github: 'https://github.com/pschlafley/Scheduler'
    },
    {
        name: 'Budget Tracker',
        src: budget,
        alt: ``,
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        technologies: ['HTML, CSS, JavaScript'],
        url: 'https://budget-tracker100.herokuapp.com/',
        github: 'https://github.com/pschlafley/budget-tracker'
    },
    {
        name: 'Just Tech News',
        src: justTechNews,
        alt: ``,
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        technologies: ['HTML, CSS, JavaScript'],
        url: 'https://just-tech-news20.herokuapp.com/',
        github: 'https://github.com/pschlafley/just-tech-news'
    },
    {
        name: 'Web Dev Blogs',
        src: webDevBlogs,
        alt: ``,
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        technologies: ['HTML, CSS, JavaScript'],
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
                {projects.map((project, i) => {
                    return (
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
                                <p className='project-description'>{project.description}</p>
                                <a className='project-link btn' href={project.url} target='_blank' rel='noreferrer'>
                                    Visit Page
                                </a>

                                <a className='project-link btn ml-3' href={project.github} target='_blank' rel='noreferrer'>Github Repo</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;

