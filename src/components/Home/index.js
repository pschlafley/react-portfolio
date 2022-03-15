import React from 'react';
import myImage from '../../assets/images/peyton.jpg';
import s from './home.module.css';

const Home = () => {
    return (
        <>
            <div id=''>
                <div>
                    <div className={`${s.imgContainer}`}>
                        <img src={myImage} alt='Peyton Schlafley' />
                    </div>
                </div>

                <div className={`${s.bodyContainer}`}>
                    <div className={s.bodyHeader}>
                        <p className={`${s.bodyTxtHeader}`}>Full Stack <span>Web Developer</span></p>
                    </div>
                    <p className={`${s.bodyTxt}`}>
                        My name is Peyton Schlafley. I grew up in Peoria, Illinois, and I am now living in Pennsylvania with my wife Casey.
                        I began my learning as a web developer July of 2019
                        when I decide to join Pennsylvania University's Full Stack Bootcamp. <br />
                        During the bootcamp we learned the technologies necessary to code full stack web applications.
                        Starting from basic to advanced level HTML, CSS, JavaScript, and then moving on to learning React, MongoDB, Express, REST APIs!
                    </p>
                    <p className={s.bodyTxt}>
                        Currently, I am working at a small company called <a href='https://www.legacy360fwm.com/' rel="noreferrer" referrer="no-referrer" target="_blank">Legacy 360° Financial LLC,</a> and as a Freelance Web Developer!
                    </p>
                    <p className={`${s.bodyTxt} ${s.marginBottom}`}>Go ahead and shoot me an email and lets chat about what I can do for you!</p>
                </div>
            </div >
        </>
    );
}

export default Home;