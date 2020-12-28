import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Navigation = (props) => {

    const { categories, currentCategory, setCurrentCategory } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav>
            <ul>
                {categories.map((category) => {
                    return (
                        <li
                            className={`pointer w-25 cs-2 my-2 list-style ${currentCategory.name === category.name && 'nav-active'
                                }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                            }}>
                                {category.name}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>

    );
}

export default Navigation;