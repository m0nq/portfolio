import React from 'react';
import { useContext } from 'react';
import { Link } from 'gatsby';

import { ScrollContext } from '@contexts/Scroll.context';

export const Projects = () => {
    const { elementRef } = useContext(ScrollContext) || {};

    return (
        <>
            <div className="projects-container" ref={elementRef}>
                <div className="intro-area">
                    <h2>Latest Projects</h2>
                    <p>
                        Some highlights of the recent projects I've worked on.
                    </p>
                </div>
                <section className="project-details">
                    <div>
                        <h4>First</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <Link to="#" className="blog-styles">Read More</Link>
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                    <div>
                        <h4>Second</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <Link to="#" className="blog-styles">Read More</Link>
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                    <div>
                        <h4>Third</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <Link to="#" className="blog-styles">Read More</Link>
                            {/* image? */}
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                </section>
                <div className="learn-more">
                    <a href="#" className="blog-link">All Projects</a>
                    {/* image? */}
                </div>
            </div>
        </>
    );
};

