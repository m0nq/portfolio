import { ReactElement } from 'react';
import moment from 'moment';

import { Section } from '@components/section/Section';
import { BackButton } from '@components/utils/BackButton';
import { getPost } from '@components/utils/api';
import { getPosts } from '@components/utils/api';

export const dynamic = 'force-static';

export const generateStaticParams = async () => {
    const { posts } = await getPosts(4);

    return posts.map(({ post: { uri } }) => ({ post: uri }));
};

const BlogPost = async ({ params: { post: postUri } }: { params: { post: string } }): Promise<ReactElement> => {

    const post = await getPost(postUri);

    return (
        <Section>
            <article className="blog-post">
                <h1 className="blog-post-title">{post.title}<span>.</span></h1>
                <p className="blog-post-date">{moment(post.date).format('MMMM Do, YYYY')}</p>
                <article className="blog-post-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                    </div>
                    <br />
                    <div>
                        <BackButton className="back-to-blog">← Back</BackButton>
                    </div>
                </article>
            </article>
        </Section>
    );
};

export default BlogPost;
