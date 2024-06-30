import { Suspense } from 'react';

import './main.styles.css';
import { Section } from '@components/utils/section';
import { Banner } from '@components/banner/Banner';
import { Skills } from '@components/skills/skills';
import { Projects } from '@components/projects/projects';
import { Offerings } from '@components/offerings/offerings';
import { BannerContent } from '@components/banner/BannerContent';
import { Loading } from '@components/loading/loading';

import macBookColorImage from '@public/macbook-color.webp';

export const Main = () => {

    return (
        <>
            <Section classes="banner" data-testid="banner">
                <Banner image={macBookColorImage}>
                    <BannerContent />
                </Banner>
            </Section>
            <Section classes="offerings" data-testid="services">
                <Offerings />
            </Section>
            <Section classes="skills" data-testid="skills">
                <Skills />
            </Section>
            <Section classes="projects" data-testid="projects">
                <Suspense fallback={<Loading />}>
                    <Projects />
                </Suspense>
            </Section>
        </>
    );
};
