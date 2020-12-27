import React from 'react';

const Navigation = (props) => {

    const { categories, currentCategory, setCurrentCategory } = props;

    return (
        <ul className='flex-row pt-5'>
            {categories.map((category) => {
                return (
                    <li className={`mx-2 list-style ${currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                        <a href={`#${category.name}`} className='text-white' onClick={() => {
                            setCurrentCategory(category);
                        }}>
                            {category.name}
                        </a>
                    </li>
                )
            })}
        </ul>
    );
}

export default Navigation;