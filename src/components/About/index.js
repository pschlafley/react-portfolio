import React from 'react';
import myPhoto from '../../images/peyton.png';
import Image from 'react-bootstrap/Image';

function About() {
    return (
        <section className='pt-3'>
            <Image src={myPhoto} className='about-image' />
            <h2 className='my-5 px-2 cs-2 pt-2 section-title'>Full Stack Web Developer</h2>
            <div>
                <h3 className='pt-5 section-title'>Who am I?</h3>
                <p id='brand-statement' className=' brand-statement '>
                    My name is Peyton Schlafley. <br />
                    I am a full stack developer with experience in customer service to build quality user experiences in web applications.
                    Recently earned a certificate in full stack development from the University of Pennsylvannia, enhancing my skills in
                    JavaScript, Express.js, React.js, Node.js, and MongoDB. Constantly building upon knowledge learned from the bootcamp, as well as trying to learn
                    new things, such as Java and object oriented programming! Passionate about working with others to develop meaningful web applications
                    with a focus on working with backend technologies. I utilized my skills to help my team of four create a MERN stack application tha implemented
                    Graphql to build a learning platform for people to expand their skill sets. <br />
                    It is my technical skills, passion, and leadership that make me an advantageous candidate for any team!
                </p>
            </div>
        </section >
    )
}

export default About;
