'use client';
import Link from 'next/link';

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
                            <Link href="#" className="blog-styles">Read More</Link>
                            {/* image? */}
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                    <div>
                        <h4>Second</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <Link href="#" className="blog-styles">Read More</Link>
                            {/* image? */}
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                    <div>
                        <h4>Third</h4>
                        <p>Some of the basic content you will find...</p>
                        <div className="blog-item">
                            <Link href="#" className="blog-styles">Read More</Link>
                            {/* image? */}
                            <p>May 7th, 2024</p>
                        </div>
                    </div>
                </section>
                <div className="learn-more">
                    <Link href="#" className="blog-link">All Projects</Link>
                    {/* image? */}
                </div>
            </div>
        </>
    );
};

