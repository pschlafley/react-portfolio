import MyForm from '../Myform';
import React from 'react';

const ContactForm = () => {
    return (
        <section className="pt-3">
            <h2 className='section-title pt-5'>Contact Me</h2>
            <div className='pt-5'>
                <MyForm />
            </div>
        </section>
    )
};

export default ContactForm;