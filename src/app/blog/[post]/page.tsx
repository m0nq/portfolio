import { ReactElement } from 'react';
import Image from 'next/image';

import './post.styles.css';
import { Section } from '@components/utils/section';
import { getPost } from '@utils/api';
import { getPosts } from '@utils/api';
import { Article } from '@components/utils/article/article';
import { BackButton } from '@components/utils/back-button/back-button';

export const generateStaticParams = async (): Promise<{ post: string; }[]> => {
    const { posts } = await getPosts(4, { tag: 'portfolio' });

    return posts.map(({ post: { uri } }) => ({ post: uri }));
};

interface BlogPostProps {
    params: Promise<{ post: string; }>;
}

const BlogPost = async (props: BlogPostProps): Promise<ReactElement> => {
    const { params } = props;
    const postParams = await params;
    const postUri = postParams.post;

    const post = await getPost(postUri);

    return (
        <>
            {post.featuredImage && (
                <Section className="relative p-7 h-auto">
                    <Image src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText}
                        width={900}
                        height={600}
                        className="rounded-3xl mx-auto" />
                </Section>
            )}
            <Section className={post.featuredImage && 'relative p-7 h-auto' || 'banner'}>
                <Article title={post.title} date={post.date}>
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
