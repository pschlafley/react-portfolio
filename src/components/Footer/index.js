import React from 'react';

function Footer() {

    return (
        <footer className="pt-5">
            <div className='flex-row box'>
                <div className='pr-5'>
                    <a target="_blank" href="https://github.com/pschlafley" rel='noreferrer'><i className="color-3 fab fa-github fa-3x"></i></a>

                </div>
                <div className='pr-5'>
                    <a href="https://www.linkedin.com/in/peyton-schlafley-81125a1b1/" target="_blank" rel='noreferrer'><i className="color-3 fab fa-linkedin fa-3x"></i></a>
                </div>
                <div id='reference' className='pr-5'>
                    <i className="fab fa-mailchimp fa-3x color-3"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;