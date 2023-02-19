import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            setErrorMessage('Please fill out all fields before submitting.');
            return;
        } else if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('Thank you! Your form has been submitted.');
    }

    return (
        <section id="contact-info">
            <h3>Contact Me</h3>

            <form className="form">
                <div className="form-group">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        value={name}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="email" 
                        value={email} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="form-element">
                    <textarea 
                        name="message" 
                        placeholder="message"
                        value={message}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-element">
                    <input 
                        type="submit" 
                        name="submit" 
                        value="SUBMIT" 
                        onClick={handleFormSubmit}
                    />
                </div>
            </form>

            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}

        </section>
    );
}