import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ReactElement } from 'react';
import ReactDom from 'react-dom';
import { useForm } from '@formspree/react';
import { ValidationError } from '@formspree/react';
import { ContactContext } from '@contexts/Contact.context';

type FormValues = {
    name: string;
    _replyto: string;
    message: string;
}

const initialValues: FormValues = {
    name: '',
    // email field renamed for formspree
    _replyto: '',
    message: ''
};

export const Contact = (): ReactElement | null => {
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [state, handleSubmit] = useForm('xdoqjkon');
    const { isOpen, setIsOpen } = useContext(ContactContext);

    useEffect(() => {
        (() => {
            console.log('formErrors ->', formErrors);
            if (Object.keys(formErrors).every(field => !formErrors[field]) && isSubmit) {
                handleSubmit(formValues);
            }
        })();
    }, [formErrors]);

    const handleFormChange = (e: React.SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const validate = (values: FormValues) => {
        const errors: FormValues = {
            name: '',
            _replyto: '',
            message: ''
        };
        const emailRegex = /^[^\s@]+@[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = 'You need a few more characters in that name';
        }

        if (!values._replyto) {
            errors._replyto = 'Email is required';
        } else if (!values._replyto.match(emailRegex)) {
            errors._replyto = 'That looks kind of funny...';
        }

        if (!values.message) {
            errors.message = 'Nothing to say...? 🤔';
        }

        console.log('Current errors ->', errors);
        return errors;
    };

    if (!isOpen) return null;

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay" onClick={() => setIsOpen(!isOpen)}>(
                <div className="contact" onClick={e => e.stopPropagation()}>
                    {state.succeeded ? (
                        <div className="success-message">
                            <p>Thanks for the message!</p>
                            <br />
                            <p>I should get back to you within 24 hours.</p>
                            <button onClick={() => setIsOpen(false)}
                                style={{
                                    border: '1px solid white',
                                    borderRadius: '0.25rem',
                                    padding: '0.5rem 1.75rem',
                                    marginTop: '0.75rem'
                                }}>
                                ← Thanks!
                            </button>
                        </div>
                    ) : (
                        <form method="POST" action="https://formspree.io/f/xdoqjkon" id="contact-form"
                            onSubmit={handleFormSubmit}>
                            <fieldset id="contact-form-group" className="contact-form">
                                <label htmlFor="full-name">Name</label>
                                <input type="text"
                                    name="name"
                                    id="full-name"
                                    placeholder="First and Last"
                                    value={formValues.name}
                                    onChange={handleFormChange} />
                                {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
                                <label htmlFor="email-address">Email</label>
                                <input type="email"
                                    name="_replyto"
                                    id="email-address"
                                    placeholder="something@email.com"
                                    value={formValues._replyto}
                                    onChange={handleFormChange} />
                                {formErrors._replyto && <p style={{ color: 'red' }}>{formErrors._replyto}</p>}
                                <label htmlFor="message">Message</label>
                                <textarea rows={5}
                                    name="message"
                                    id="message"
                                    placeholder="Fashion axe fanny pack migas cliche kinfolk. Mukbang selfies palo santo post-ironic DIY. Tacos gochujang mumblecore whatever. Bicycle rights tousled tumblr DIY. Cray solarpunk master cleanse pug live-edge, helvetica XOXO. Pour-over fam bruh typewriter mixtape, thundercats twee listicle raw denim lomo yes plz XOXO artisan jean shorts. Quinoa ugh grailed jawn tumeric yr jianbing."
                                    value={formValues.message}
                                    onChange={handleFormChange} />
                                {formErrors.message && <p style={{ color: 'red' }}>{formErrors.message}</p>}
                                <ValidationError prefix="Message"
                                    field="message"
                                    errors={state.errors} />
                                <input type="hidden" name="_subject" id="email-subject"
                                    value="Porfolio Contact Form Submission" />
                                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                            </fieldset>
                            <button className="contact-send-btn" onClick={() => setIsOpen(false)}>Cancel</button>
                            <button type="submit" className="contact-send-btn">Send</button>
                        </form>
                    )}
                </div>
            </div>
        </>,
        document.querySelector('#portal') as HTMLDivElement
    );
};
