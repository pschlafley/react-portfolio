import React from 'react';
import Navigation from '../Navigation';


const Header = (props) => {

    const { categories, setCurrentCategory, currentCategory } = props;
    return (
        <div>
            <div className='div-center center-align pt-5'>
                <a href='/' className='font-1'>
                    <span className='color-1 font-weight-light'>Peyton</span>
                    <span className='font-italic font-weight-bold nav-active'>S.</span>
                </a>
            </div>
            <div className='flex-row pt-3 pr-5 box'>
                <Navigation
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                />
            </div>
        </div>
    );
}

export default Header;