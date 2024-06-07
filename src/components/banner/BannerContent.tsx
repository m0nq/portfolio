'use client';
import { ReactElement } from 'react';
import { FaReact } from 'react-icons/fa';

import { useContactContext } from '@contexts/Contact.context';

export const BannerContent = (): ReactElement => {
    const { setIsOpen } = useContactContext();

    return (
        <>
            <div className="banner-container">
                <div className="banner-content">
                    <h1>MONK WELLINGTON<span>.</span></h1>
                    <div className="strong-emphasis">
                        <p>
                            Empathy to code.
                        </p>
                        <p>
                            Front-End Web Developer <FaReact /> React Specialist.
                        </p>
                    </div>
                    <div className="banner-btn-container">
                        <button className="banner-button" onClick={() => setIsOpen(true)}>
                            Get in touch!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
