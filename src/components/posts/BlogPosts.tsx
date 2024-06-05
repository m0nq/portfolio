import React from 'react';
import { ReactElement } from 'react';

import { UniversalLink } from '@components/utils/UniversalLink';

export const BlogPosts = (): ReactElement => {
    // allWpPost query here:
    // - title
    // - excerpt
    // - date
    // - slug
    // - featuredImage
    // - uri?

    return (
        <>
            <div>
                <section className="blog-details">
                    <div>
                        {/* image? */}
                        <h4>First</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <UniversalLink to="#" activeClassName="blog-styles">Read More</UniversalLink>
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
