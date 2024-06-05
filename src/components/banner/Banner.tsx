import { ReactElement } from 'react';

export const Banner = ({ image, children = null }: {
    image?: any,
    children?: React.ReactNode
}): ReactElement => {

    return (
        <>
            <div className="banner-image-container" data-testid="banner-image">
                {/*<GatsbyImage image={getImage(gatsbyImageData) as IGatsbyImageData}*/}
                {/*    alt="Illuminated MacBook laptop"*/}
                {/*    className="banner-image" />*/}
            </div>
            {children}
        </>
    );
};

