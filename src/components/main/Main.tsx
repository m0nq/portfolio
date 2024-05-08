import React from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import { Testimonials } from '@components/testimonials/Testimonials';
import { Projects } from '@components/projects/Projects';
import { About } from '@components/about/About';

export const Main = () => {
    return (
        <main className="main-wrapper">
            <div className="item-list-wrapper">
                <div className="item-list">
                    <Section classes="banner-section">
                        <Banner />
                    </Section>
                    <Section classes="offerings">
                        <About />
                    </Section>
                    {/*<Section classes="offerings">*/}
                    {/*    <Offerings />*/}
                    {/*</Section>*/}
                    <Section classes="testimonials">
                        <Testimonials />
                    </Section>
                    <Section classes="projects">
                        <Projects />
                    </Section>
                </div>
            </div>
        </main>
    );
};
