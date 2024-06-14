import { ReactElement } from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';

export const Banner = ({ image, children = null }: {
    image: any,
    children?: ReactNode
}): ReactElement => {

    return (
        <>
            <div className="banner-image-container" data-testid="banner-image">
                <Image src={image} alt="Illuminated MacBook laptop" className="banner-image" priority={true} />
            </div>
            {children}
        </>
    );
};

