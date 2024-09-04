'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReactElement } from 'react';
import { SyntheticEvent } from 'react';
import { ImSpinner10 } from 'react-icons/im';

import './contact.styles.css';
import { useContactContext } from '@contexts/contact.context';
import { FormValues } from '@data-types/data-props';
import { EmailResponse } from '@data-types/data-props';

const sendEmail = async (form: FormValues): Promise<EmailResponse> => {
    // send form to /api/contact as a post request
    const res: Response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    const { success, errors, response } = await res.json();

    return { success, errors, response };
};

const initialValues: FormValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

export const Contact = (): ReactElement | null => {
    const [formValues, setFormValues] = useState<FormValues>(initialValues);
    const [formErrors, setFormErrors] = useState<FormValues>(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [state, setState] = useState({ success: false } as EmailResponse);
    const { isOpen, setIsOpen } = useContactContext();

    useEffect(() => {
        (async () => {
            if (Object.keys(formErrors).every((field: string): boolean => !formErrors[field]) && isSubmit) {
                setState({ ...await sendEmail({ ...formValues }), isPending: false });
            } else {
                setState({ success: false, isPending: false });
            }
        })();
    }, [formErrors, isSubmit, formValues]);

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', close);

        return () => window.removeEventListener('keydown', close);
    }, [setIsOpen]);

    const handleFormChange = (e: SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setState({ isPending: true });
        setIsSubmit(true);
    };

    const handleAppreciation = () => {
        setFormValues(initialValues);
        setFormErrors(initialValues);
        setIsOpen(false);
    };

    const validate = (values: FormValues) => {
        const errors: FormValues = {
            name: '',
            email: '',
            message: ''
        };

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const nameRegex = /^[a-z ,'-]+$/i;

        if (!values.name) {
            errors.name = 'You need a few more characters here...';
        } else if (!values.name.match(nameRegex)) {
            errors.name = 'You trying to be funny...?';
        }

        if (!values.email || !values.email.match(emailRegex)) {
            errors.email = 'That doesn\'t look right...';
        }

        if (!values.message) {
            errors.message = 'Nothing to say...? 🤔';
        }

        return errors;
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay animate-fade-in-bottom" onClick={() => setIsOpen(false)}>
                <div className="contact" onClick={e => e.stopPropagation()}>
                    {state.success ? (
                        <div className="success-message">
                            <p>Thanks for the message!</p>
                            <br />
                            <p>I should get back to you within a business day.</p>
                            <button className="contact-confirm-btn" onClick={handleAppreciation}>
                                ← Thanks!
                            </button>
                        </div>
                    ) : (
                        <form id="contact-form" onSubmit={handleFormSubmit}>
                            <fieldset id="contact-form-group" className="contact-form">
                                <label htmlFor="full-name">Name</label>
                                <input type="text"
                                    name="name"
                                    id="full-name"
                                    placeholder="First and Last"
                                    value={formValues.name}
                                    onChange={handleFormChange} />
                                {formErrors.name && <p>{formErrors.name}</p>}
                                <label htmlFor="email-address">Email</label>
                                <input type="text"
                                    name="email"
                                    id="email-address"
                                    placeholder="something@email.com"
                                    value={formValues.email}
                                    onChange={handleFormChange} />
                                {formErrors.email && <p>{formErrors.email}</p>}
                                <label htmlFor="message">Message</label>
                                <textarea rows={5}
                                    name="message"
                                    id="message"
                                    placeholder="Fashion axe fanny pack migas cliche kinfolk. Mukbang selfies palo santo post-ironic DIY. Tacos gochujang mumblecore whatever. Bicycle rights tousled tumblr DIY. Cray solarpunk master cleanse pug live-edge, helvetica XOXO. Pour-over fam bruh typewriter mixtape, thundercats twee listicle raw denim lomo yes plz XOXO artisan jean shorts. Quinoa ugh grailed jawn tumeric yr jianbing."
                                    value={formValues.message}
                                    onChange={handleFormChange} />
                                {formErrors.message && <p>{formErrors.message}</p>}
                                <input type="hidden"
                                    name="subject"
                                    id="email-subject"
                                    value="Porfolio Contact Form Submission" />
                                <input type="text"
                                    className="honey-pot"
                                    name="_gotcha"
                                    maxLength={0} />
                                {state.errors && <p>
                                    Sorry... there was a network error. Maybe refresh and try again?
                                </p>}
                                {state.isPending && <ImSpinner10 className="spinner" />}
                            </fieldset>
                            <button className="contact-cancel-btn" onClick={() => setIsOpen(false)}>Cancel</button>
                            <button type="submit" className="contact-confirm-btn">Send</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};
