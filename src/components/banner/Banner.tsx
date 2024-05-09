import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Banner = () => (
    <>
        <div className="banner-image">
            <StaticImage src="../../images/macbook-color.webp"
                alt="Illuminated MacBook laptop"
                style={{
                    bottom: 0,
                    height: '100%',
                    left: 0,
                    margin: 0,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    maxWidth: '100%',
                    padding: 0,
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '100%',
                    objectFit: 'cover'
                }} />
        </div>
        <div className="banner-container">
            <div className="banner-content">
                <h1>MONK WELLINGTON<span>.</span></h1>
                <h2>
                    Front-End Web Developer – React Specialist
                    <br />
                    Enhancing user journey's with code
                </h2>
                <div className="banner-btn-container">
                    <button className="banner-button">Get in touch!</button>
                </div>
            </div>
        </div>
    </>
);

