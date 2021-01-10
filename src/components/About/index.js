import React from 'react';
import myPhoto from '../../images/peyton.png';
import Image from 'react-bootstrap/Image';

function About() {
    return (
        <section className='pt-3'>
            <h2 className='my-5 px-2 cs-2 pt-2 section-title'>About Me</h2>
            <Image src={myPhoto} className='about-image' />
            <div>
                <p id='brand-statement' className='cs-2 px-1 py-2 my-5'>
                    Hi, I'm Peyton Schlafley.<br />
                    I am a Full-Stack web developer.
                    <br />
                    Throughout my life I have always been involved in sports, my favorite sport being soccer. My favorite part about playing soccer is not only the competiveness of the sport, but also how much of a team sport it is. You can't win a game without good communication, and the ability to solve problems and look for ways to score goals.
                    I am a hard worker with good communication, problem solving skills, and a willingness to take on new challenges and learn new skills.
                    <br />
                    I recently graduated with a certificate in full stack Web Development from the University of Pennsylvania's Coding Bootcamp, who partners with Trilogy Education Services, where I have learned the technical skills needed to be a highly effective and efficient Web Developer.
                    With proficiency in the MERN stack, which includes MondoDB, Express, React, and Node.js, I can make fast and functional web applications.
                </p>
            </div>
        </section >
    )
}

export default About;
