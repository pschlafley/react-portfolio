import React from 'react';
import myImage from '../../assets/images/peyton.jpg';
import NavBar from '../Nav';
import s from './home.module.css'

const Home = () => {
    return (
        <div className={`${s.fullBackground}`}>
            <div>
                <NavBar />
                <div className={`${s.imgContainer}`}>
                    <div className={`${s.whiteBox} ${s.slideAnimation}`}></div>
                    <img src={myImage} alt='Peyton Schlafley' />
                </div>
                <div className={`${s.txtContainer} ${s.slideAnimation}`}>
                    <p className={`${s.txtHeader}`}>Hey there, I'm <br /> <span>Peyton Schlafley</span></p>
                </div>
            </div>

            <div>

            </div>
        </div >
    );
}

export default Home;