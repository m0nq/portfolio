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
            <div className="testimonials-container">
                <aside className="title-aside">
                    <h3>Built for speed</h3>
                    <p>By using GatsbyJS, the Barcadia site is super-fast out of the box</p>
                </aside>
                <span className="testimonials-span">X</span>
                <aside className="title-aside">
                    <h3>Built For Content</h3>
                    <p>Contentful helps you edit your application with ease as your business expands</p>
                </aside>
            </div>
        </>
    );
};
