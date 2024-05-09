import React from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import { Skills } from '@components/skills/Skills';
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
                    <Section classes="about">
                        <About />
                    </Section>
                    <Section classes="skills">
                        <Skills />
                    </Section>
                    <Section classes="projects">
                        <Projects />
                    </Section>
                </div>
            </div>
        </main>
    );
};
