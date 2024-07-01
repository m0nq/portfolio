import { ReactElement } from 'react';
import Image from 'next/image';

import './post.styles.css';
import { Section } from '@components/utils/section';
import { getPost } from '@utils/api';
import { getPosts } from '@utils/api';
import { Article } from '@components/utils/article/article';
import { BackButton } from '@components/utils/back-button/back-button';

export const generateStaticParams = async () => {
    const { posts } = await getPosts(4);

    return posts.map(({ post: { uri } }) => ({ post: uri }));
};

const BlogPost = async ({ params: { post: postUri } }: { params: { post: string } }): Promise<ReactElement> => {

    const post = await getPost(postUri);

    return (
        <>
            {post.featuredImage && (
                <Section className="relative p-7 mx-auto max-w-5xl">
                    <Image src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText}
                        width={900}
                        height={600}
                        className="rounded-3xl mx-auto" />
                </Section>
            )}
            <Section>
                <Article title={post.title}>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                    </div>
                </Article>
                <BackButton>← Back</BackButton>
            </Section>
        </>
    );
};

export default BlogPost;
