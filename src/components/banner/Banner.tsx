import React from 'react';
import { ReactElement } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { type IGatsbyImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

export const Banner = ({ image: { gatsbyImageData }, children = null }: {
    image: { gatsbyImageData: IGatsbyImageData },
    children?: React.ReactNode
}): ReactElement => {
    // GatsbyImage is needed as a workaround for the limitations of passing dynamic images
    // as props to StaticImage, even though the image is local file. :?
    // See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage

    return (
        <>
            <div className="banner-image-container" data-testid="banner-image">
                <GatsbyImage image={getImage(gatsbyImageData) as IGatsbyImageData}
                    alt="Illuminated MacBook laptop"
                    className="banner-image" />
            </div>
            {children}
        </>
    );
};

