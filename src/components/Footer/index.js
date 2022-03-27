import React from 'react';
import s from './footer.module.css';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={s.fWrap}>
            <a rel='noreferrer' referrer="no-referrer" target="_blank" href='https://github.com/pschlafley'>
                <i className={s.myIcon}>
                    <FaGithub />
                </i>
            </a>
            <a rel='noreferrer' referrer="no-referrer" target="_blank" href='https://www.linkedin.com/in/peyton-schlafley-81125a1b1/'>
                <i alt="click here to visit my linkedin profile" className={s.myIcon}>
                    <FaLinkedinIn />
                </i>
            </a>
        </footer>
    )
};

export default Footer;