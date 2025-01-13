'use client';
import { ReactElement } from 'react';
import { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { IoClose } from 'react-icons/io5';

import './contact.styles.css';
import { useContactContext } from '@contexts/contact.context';

const sendEmail = async (form: any): Promise<any> => {
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

export const Contact = (): ReactElement | null => {
    const { isOpen, setIsOpen } = useContactContext();

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', close);

        return () => window.removeEventListener('keydown', close);
    }, [setIsOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay animate-fade-in-bottom" onClick={() => setIsOpen(false)} role="presentation">
            <div className="contact" onClick={e => e.stopPropagation()}>
                <div className="close-button-container">
                    <button className="contact-close-btn" onClick={() => setIsOpen(false)} aria-label="Close calendar">
                        <IoClose size={36} />
                    </button>
                </div>
                <InlineWidget
                    url="https://calendly.com/monk-wellington/chat"
                    styles={{
                        height: 'min(85vh, 650px)',
                        width: '100%',
                        margin: 0
                    }}
                />
            </div>
        </div>
    );
};
