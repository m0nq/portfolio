import React from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import { Skills } from '@components/skills/Skills';
import { Projects } from '@components/projects/Projects';
import { About } from '@components/about/About';

import styles from './main.module.css';

export const Main = () => {
    return (
        <main className={styles ? styles.mainWrapper : 'main-wrapper'}>
            <div className={styles ? styles.itemListWrapper : 'item-list-wrapper'}>
                <div className={styles ? styles.itemList : 'item-list'}>
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
