import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Testimonials = () => {
    return (
        <>
            <StaticImage src="../../images/abstract-building.webp"
                alt="Testimonials"
                style={{
                    bottom: 0,
                    height: '571px',
                    left: 0,
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    // position: 'relative',
                    right: 0,
                    top: 0,
                    verticalAlign: '100%',
                    width: '100%'
                }} />
            <div className="testimonials-image-overlay"></div>
            <div className="testimonials-container"></div>
        </>
    );
};
