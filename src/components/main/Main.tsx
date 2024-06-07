import { Suspense } from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import { Skills } from '@components/skills/Skills';
import { Projects } from '@components/projects/Projects';
import { About } from '@components/about/About';
import { BannerContent } from '@components/banner/BannerContent';
import { Loading } from '@components/loading/Loading';

import macBookColorImage from '@public/macbook-color.webp';

export const Main = () => {

    return (
        <main className="main-wrapper">
            <div className="item-list-wrapper" data-testid="item-list-wrapper">
                <div className="item-list" data-testid="item-list">
                    <Section classes="banner" data-testid="banner">
                        <Banner image={macBookColorImage}>
                            <BannerContent />
                        </Banner>
                    </Section>
                    <Section classes="about" data-testid="about">
                        <About />
                    </Section>
                    <Section classes="skills" data-testid="skills">
                        <Skills />
                    </Section>
                    <Section classes="projects" data-testid="projects">
                        <Suspense fallback={<Loading />}>
                            <Projects />
                        </Suspense>
                    </Section>
                </div>
            </div>
        </main>
    );
};
