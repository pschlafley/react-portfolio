import React from 'react';
import s from './footer.module.css';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={s.fWrap}>
            <i className={s.myIcon}>
                <FaGithub />
            </i>
            <i className={s.myIcon}>
                <FaLinkedinIn />
            </i>
        </footer>
    )
};

export default Footer;