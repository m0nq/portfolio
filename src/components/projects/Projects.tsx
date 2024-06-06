'use client';

import { UniversalLink } from '@components/utils/UniversalLink';

export const Projects = () => {

    return (
        <>
            <div id="projects" className="projects-container">
                <div className="intro-area">
                    <h2>Latest Projects</h2>
                    <p>
                        Some highlights of the recent projects I&apos;ve worked on.
                    </p>
                </div>
                <section className="blog-details">
                    <div>
                        <h4>First</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <UniversalLink to="#" activeClassName="blog-styles">Read More</UniversalLink>
                            {/* image? */}
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                    <div>
                        <h4>Second</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <UniversalLink to="#" activeClassName="blog-styles">Read More</UniversalLink>
                            {/* image? */}
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                    <div>
                        <h4>Third</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <UniversalLink to="#" activeClassName="blog-styles">Read More</UniversalLink>
                            {/* image? */}
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                </section>
                <div className="learn-more">
                    <UniversalLink to="#" activeClassName="blog-link">All Projects</UniversalLink>
                    {/* image? */}
                </div>
            </div>
        </>
    );
};

