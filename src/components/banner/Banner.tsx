import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Banner = () => (
    <>
        <div className="banner-image">
            <StaticImage src="../../images/macbook-color.webp" alt="An illuminated MacBook laptop" />
        </div>
        <div className="banner-container">
            <div className="banner-content">
                <h1>Monk Wellington<span style={{ color: 'pink' }}>.</span></h1>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cum ex laboriosam
                    nam obcaecati placeat reprehenderit tenetur. Aliquid consequatur exercitationem fuga ipsum iure.
                    Alias amet aut laborum magni temporibus?
                </h2>
                <div className="banner-btns">
                    <button className="banner-button">Get in touch!</button>
                </div>
            </div>
        </div>
        <div className="gradient">Gradient</div>
    </>
);

