import React from 'react';
import tuneOut from '../../assets/images/tune-out.png'
import WD from '../../assets/images/weather-dashboard.png';
import workDay from '../../assets/images/work-day-scheduler.png';
import legacyclientportal from '../../assets/images/legacyclientportal.png'
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
            name: 'Weather Dashboard',
            src: WD,
            alt: `Weather Dashboard Landing Page`,
            technologies: ['HTML / CSS / JavaScript / JQuery / Bootstrap / OpenWeather Api'],
            url: 'https://pschlafley.github.io/weatherDashboard/',
            github: 'https://github.com/pschlafley/weatherDashboard'
        },
        {
            id: '3',
            name: 'Work Day Scheduler',
            src: workDay,
            alt: `Work Day Scheduler Landing Page`,
            technologies: ['HTML / CSS / JavaScript / JQuery'],
            url: 'https://pschlafley.github.io/Scheduler/',
            github: 'https://github.com/pschlafley/Scheduler'
        },
        {
            id: '4',
            name: "Legacy 360 Client Portal",
            src: legacyclientportal,
            alt: "Legacy 360 Client Portal Home Page",
            technologies: "React / ViteJS / JavaScript / TailwindCSS / NodeJS / Mongoose / MongoDB / GraphQL / NodeMailer / ejs / RedTail API",
            url: 'https://legacy360-clientportal.com',
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
                            <div>
                                {projects.name === "Legacy 360 Client Portal"
                                    ? <span className={s.privateRepo}>Private Repo</span>
                                    : <a rel='noreferrer noopener' referrer="no-referrer" target="_blank" href={projects.github}>
                                        <i className={s.myIcon}>
                                            <FaGithub />
                                        </i>
                                    </a>

                                }
                                <a rel='noreferrer noopener' referrer="no-referrer" target="_blank" href={projects.url}>
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