import { ReactElement } from 'react';

import { Section } from '@components/utils/section';
import { About } from '@components/about/about';
import { Article } from '@components/utils/article/article';

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
