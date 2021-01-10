import React from 'react';
import Navigation from '../Navigation';


const Header = (props) => {

    const { currentPage, setCurrentPage } = props;

    return (
        <div>
            <div className='div-center center-align pt-5'>
                <span className='color-1 font-1 font-weight-lighter'>Peyton</span>
                <span className='font-1 font-italic font-weight-bold color-4'>S.</span>
            </div>
            <div className='flex-row pt-3 pr-5 box'>
                <Navigation
                    tabs={props.tabs}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
}

export default Header;