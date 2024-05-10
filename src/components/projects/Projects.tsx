import React from 'react';
import { Link } from 'gatsby';

export const Projects = () => {
    return (
        <>
            <div className="projects-container">
                <div className="intro-area">
                    <h2>Latest Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid cupiditate dolorum ducimus
                        eaque eligendi, esse ex, fuga iure iusto libero magnam modi nobis non porro reprehenderit
                        sapiente velit voluptas.
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

