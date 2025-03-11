import { ReactNode } from 'react';

import { Section } from '@components/utils/section';
import { About } from '@components/about/about';
import { Article } from '@components/utils/article/article';
import { BackButton } from '@components/utils/back-button/back-button';

const BlogPost = async (): Promise<ReactNode> => {

    return (
        <Section className="relative p-7 h-auto">
            <Article title="About Me">
                <About />
            </Article>
            <BackButton>← Back</BackButton>
        </Section>
    );
};

export default BlogPost;
