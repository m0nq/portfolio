import { ReactElement } from 'react';

import { Section } from '@components/utils/section';
import { getPost } from '@utils/api';
import { getPosts } from '@utils/api';
import { Article } from '@components/utils/article/article';

export const generateStaticParams = async () => {
    const { posts } = await getPosts(4);

    return posts.map(({ post: { uri } }) => ({ post: uri }));
};

const BlogPost = async ({ params: { post: postUri } }: { params: { post: string } }): Promise<ReactElement> => {

    const post = await getPost(postUri);

    return (
        <Section>
            <Article title={post.title}>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                </div>
            </Article>
        </Section>
    );
};

export default BlogPost;
