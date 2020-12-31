import React from 'react';
import myPhoto from '../../images/peyton.png';
import Image from 'react-bootstrap/Image';

function About() {
    return (
        <section>
            <h1 className='my-5 px-2 cs-2 section-title'>About Me</h1>
            <Image src={myPhoto} className='about-image' />
            <div>
                <p className='center-align cs-2 px-1 py-2 my-5'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident, <br />
                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
                    et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                    rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
            </div>
        </section>
    )
}

export default About;