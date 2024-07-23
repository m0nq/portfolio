import { ReactElement } from 'react';
import { FaReact } from 'react-icons/fa';

import './banner.styles.css';
import { CTAButton } from '@components/utils/cta/cta-button';

export const BannerContent = (): ReactElement => {

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
                        <CTAButton className="banner-button">Get in touch!</CTAButton>
                    </div>
                </div>
            </div>
        </>
    );
};
