import React from 'react';
import myImage from '../../assets/images/peyton.jpg';
import NavBar from '../Nav';
import s from './home.module.css'

const Home = () => {
    return (
        <div className={`${s.fullBackground}`}>
            <div>
                <NavBar />
                <div className={s.imgContainer}>
                    <div className={s.whiteBox}></div>
                    <img src={myImage} alt='picture of Peyton Schlafley' />
                    <div className={s.txtContainer}>
                        {/* <div className={s.txtBg}></div> */}
                        <p>Peyton Schlafley</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;