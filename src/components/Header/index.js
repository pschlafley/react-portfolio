import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <div className='flex-row pt-3 pr-5 box'>
                <ul className='flex-row'>
                    <li className='pointer px-2 cs-2 my-2 list-style'>
                        <Link
                            to='/about-me'
                            className='non-active'
                        >
                            About Me
                        </Link>
                    </li>
                    <li className='pointer px-2 cs-2 my-2 list-style'>
                        <Link
                            to='/portfolio'
                            className='non-active'
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className='pointer px-2 cs-2 my-2 list-style'>
                        <Link
                            to='/resume'
                            className='non-active'
                        >
                            Resume
                        </Link>
                    </li>
                    <li className='pointer px-2 cs-2 my-2 list-style'>
                        <Link
                            to='/contact-me'
                            className='non-active'
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;