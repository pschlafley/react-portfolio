import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your Email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className='pt-3'>
            <h1 className='section-title'>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <br />
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>

                <div className='pt-3'>
                    <label htmlFor='email'>Email address:</label>
                    <br />
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>

                <div className='pt-3 pb-1'>
                    <label htmlFor='message'>Message:</label>
                    <br />
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>

                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}

                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;