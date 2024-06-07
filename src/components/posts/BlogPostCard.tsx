import { ReactElement } from 'react';
import Link from 'next/link';

export const BlogPostCard = (): ReactElement => {
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
                            <Link href="#" className="blog-styles">Read More</Link>
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
