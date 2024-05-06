import React from 'react';

export const Main = () => {
    return (
        <main className="main-wrapper">
            <div className="item-list-wrapper">
                <div className="item-list">
                    <section className="banner-section">Banner area</section>
                    <span id="top-content"></span>
                    <section className="about">About section with contact button</section>
                    <section className="offerings">Offerings</section>
                    <section className="testimonials">Testimonials</section>
                    <section className="misc">Misc</section>
                </div>
            </div>
        </main>
    );
};
