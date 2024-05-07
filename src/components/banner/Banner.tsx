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
                    maxWidth: 'none',
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
                <h1>Monk Wellington<span style={{ color: 'pink' }}>.</span></h1>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cum ex laboriosam
                    nam obcaecati placeat reprehenderit tenetur.
                </h2>
                <div className="banner-btn-container">
                    <button className="banner-button">Get in touch!</button>
                </div>
            </div>
        </div>
    </>
);

