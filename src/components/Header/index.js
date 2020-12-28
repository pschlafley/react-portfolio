import React from 'react';
import Navigation from '../Navigation';


const Header = (props) => {

    const { categories, setCurrentCategory, currentCategory } = props;
    return (
        <div>
            <div className='item-1'>
                <h1 className='p-5'>
                    <a href='/'>
                        <span className='text-white font-weight-light'>Peyton</span>
                        <span className='font-italic font-weight-bold nav-active'>S.</span>
                    </a>
                </h1>
            </div>
            <div className='item-2'>
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