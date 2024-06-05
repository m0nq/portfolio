import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import { Skills } from '@components/skills/Skills';
import { Projects } from '@components/projects/Projects';
import { About } from '@components/about/About';
import { BannerContent } from '@components/banner/BannerContent';

export const Main = () => {
    // const { allImages: { nodes: images } } = useSiteQueryData();

    // const image = images.find(image => image.original.src.includes('macbook-color'));

    return (
        <main className="main-wrapper">
            <div className="item-list-wrapper">
                <div className="item-list">
                    <Section classes="banner" data-testid="banner">
                        <Banner>
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
                        <Projects />
                    </Section>
                </div>
            </div>
        </main>
    );
};
