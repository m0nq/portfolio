// src/app/blog/[post]/page.tsx
import { ReactElement } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import './post.styles.css';
import { Section } from '@components/utils/section';
import { getPost } from '@utils/api';
import { getPosts } from '@utils/api';
import { Article } from '@components/utils/article/article';
import { BackButton } from '@components/utils/back-button/back-button';

export const dynamicParams = true;

const normalizeWpUri = (value: string): string => {
    const withoutQuery = value.split('?')[0].split('#')[0];
    const segments = withoutQuery.split('/').filter(Boolean);

    return `/${segments.join('/')}/`;
};

const wpUriToRouteParam = (wpUri: string): string | null => {
    const segments = wpUri.split('/').filter(Boolean);
    if (segments.length !== 1) return null;
    return segments[0];
};

export const generateStaticParams = async (): Promise<{ post: string; }[]> => {
    const { posts } = await getPosts(250, { tag: 'portfolio' });

    const params = posts
        .map(({ post: { uri } }) => wpUriToRouteParam(uri))
        .filter((post): post is string => Boolean(post))
        .map((post) => ({ post }));

    return params;
};

interface BlogPostProps {
    params: Promise<{ post: string; }>;
}

const BlogPost = async (props: BlogPostProps): Promise<ReactElement> => {
    const { params } = props;
    const postUri = normalizeWpUri((await params).post);

    const post = await getPost(postUri);
    if (!post?.title) notFound();

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
