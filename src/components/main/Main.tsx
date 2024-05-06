import React from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';

export const Main = () => {
    return (
        <main className="main-wrapper">
            <div className="item-list-wrapper">
                <div className="item-list">
                    <Section classes="banner-section">
                        <Banner />
                    </Section>
                    <span id="top-content"></span>
                    <Section classes="about">About section with contact button</Section>
                    <Section classes="offerings">Offerings</Section>
                    <Section classes="testimonials">Testimonials</Section>
                    <Section classes="latest-projects">Latest Projects</Section>
                </div>
            </div>
        </main>
    );
};
