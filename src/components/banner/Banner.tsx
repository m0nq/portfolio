import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const Banner = () => (
    <>
        <div className="banner-image">
            <StaticImage src="../../images/macbook-color.webp" alt="An illuminated MacBook laptop" />
        </div>
        <div className="container">Container</div>
        <div className="gradient">Gradient</div>
    </>
);

