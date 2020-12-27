import React from 'react';
import Navigation from '../Navigation';


const Header = (props) => {

    const { categories, setCurrentCategory, currentCategory } = props;
    return (
        <div className='flex-row bg-dark'>
            <h1 className='font-weight-light p-5 text-white'>Peyton <span className='font-italic font-weight-bold text-danger'>S.</span></h1>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            />
        </div>
    );
}

export default Header;