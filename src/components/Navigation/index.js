import React, { useEffect } from 'react';

const Navigation = (props) => {

    const tabs = ['About Me', 'Portfolio', 'Contact Me'];

    const { currentPage, setCurrentPage } = props;

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (
        <ul className='flex-row'>
            {tabs.map(tab => (
                <li className='pointer px-2 cs-2 my-2 list-style' key={tab}>
                    <span
                        onClick={() => setCurrentPage(tab)}
                        className={
                            currentPage === tab ? 'nav-active' : 'non-active'
                        }
                    >
                        {tab}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;