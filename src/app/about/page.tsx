import { ReactElement } from 'react';

import { Section } from '@components/utils/section';
import { About } from '@components/about/about';
import { Article } from '@components/utils/article/article';
import { BackButton } from '@components/utils/back-button/back-button';

const BlogPost = async (): Promise<ReactElement> => {

    return (
        <Section className="banner">
            <Article title="About Me">
                <About />
            </Article>
            <BackButton>← Back</BackButton>
        </Section>
    );
};

export default BlogPost;
