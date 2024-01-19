import React from 'react';
import myImage from '../../assets/images/peyton.jpg';
import s from './home.module.css';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <motion.div
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
                <div className={`${s.imgContainer}`}>
                    <img className={s.myPhoto} src={myImage} alt='Peyton Schlafley' />
                </div>

                <div className={`${s.bodyContainer}`}>
                    <div className={s.bodyHeader}>
                        <p className={`${s.bodyTxtHeader}`}>Full Stack <span>Web Developer</span></p>
                    </div>
                    <p className={`${s.bodyTxt}`}>
                        My name is Peyton Schlafley.
                        I began my learning as a web developer July of 2019
                        when I decide to join Pennsylvania University's Full Stack Bootcamp. <br />
                        I have four years of overall software development experience, three years of Node, Express, React, Mongo experience. On top of that I also have six months Golang and PostgreSQL experience. Targeting roles that specialize in backend web server and API development.
                    </p>
                </div>
            </motion.div>
        </>
    );
}

export default Home;