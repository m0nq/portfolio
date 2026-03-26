// src/app/blog/[post]/page.tsx
import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import './post.styles.css';
import { Section } from '@components/utils/section';
import { getPost } from '@utils/api';
import { Article } from '@components/utils/article/article';
import { BackButton } from '@components/utils/back-button/back-button';

export const dynamicParams = true;

const normalizeWpUri = (value: string): string => {
    const withoutQuery = value.split('?')[0].split('#')[0];
    const segments = withoutQuery.split('/').filter(Boolean);

    return `/${segments.join('/')}/`;
};

interface BlogPostProps {
    params: Promise<{ post: string; }>;
}

const BlogPostUnavailable = (): ReactElement => (
    <main className="p-7">
        <h1 className="text-2xl font-semibold">This post is temporarily unavailable</h1>
        <p className="mt-3 max-w-prose opacity-80">
            Something went wrong while loading this article. Please try again, or come back later.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog" className="rounded-md border px-4 py-2">
                Back to blog
            </Link>
        </div>
    </main>
);

const BlogPost = async (props: BlogPostProps): Promise<ReactElement> => {
    const { params } = props;
    const postUri = normalizeWpUri((await params).post);

    let post;
    try {
        post = await getPost(postUri);
    } catch {
        return <BlogPostUnavailable />;
    }

    if (!post?.title) {
        notFound();
    }

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
