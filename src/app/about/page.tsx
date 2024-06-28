import { ReactElement } from 'react';

import { Section } from '@components/section/Section';
import { About } from '@components/about/About';
import { Article } from '@components/article/article';

const BlogPost = async (): Promise<ReactElement> => {

    return (
        <Section>
            <Article title="A Little About Me">
                <About />
            </Article>
        </Section>
    );
};

export default BlogPost;
