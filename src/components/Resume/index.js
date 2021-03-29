import React from 'react';

const Resume = () => {

    const frontEnd = [
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'Bootstrap'
        },
        {
            name: 'JQuery'
        },
        {
            name: 'Responsive Design'
        },
        {
            name: 'React'
        },
    ]

    const backEnd = [
        {
            name: 'Node Js'
        },
        {
            name: 'Express Js'
        },
        {
            name: 'MySQL'
        },
        {
            name: 'Sequelize'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'Mongoose'
        },
        {
            name: 'REST'
        },
    ]


    return (
        <div className='pt-5 div-center'>
            <h1 className='section-title'>Resume</h1>
            <h2 className='font-weight-lighter pt-5'>Front-End Proficiencies</h2>
            <ul className='pt-3'>
                {frontEnd.map((tech, i) => {
                    return (
                        <li key={i} className='pt-2 color-2'>
                            {tech.name}
                        </li>
                    )
                })}
            </ul>
            <h2 className='pt-5 font-weight-lighter'>Back-End Proficiencies</h2>
            <ul className='pt-3'>
                {backEnd.map((tech, i) => {
                    return (
                        <li key={i} className='pt-2 color-2'>
                            {tech.name}
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Resume;