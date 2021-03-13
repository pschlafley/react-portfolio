import MyForm from '../Myform';
import React from 'react';

const ContactForm = () => {
    return (
        <section className="pt-3">
            <h2 className='section-title pt-5'>Contact Me</h2>
            <div className='text-center font-2'>
                <p>(pschlafley0@gmail.com)</p>
            </div>
            <div className='pt-5'>
                <MyForm />
            </div>
        </section>
    )
};

export default ContactForm;