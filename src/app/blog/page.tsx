'use client';
import { useCallback, useEffect, useState } from 'react';
import './blog.styles.css';
import { Section } from '@components/utils/section';
import { Banner } from '@components/banner/banner';
import macbookCloseupImage from '@public/macbook-closeup.webp';
import { BlogCardDetails } from '@components/utils/blog/blog-card-details';
import { Post } from '@data-types/data-props';
import { BackButton } from '@components/utils/back-button/back-button';
import { Pagination } from '@components/blog/pagination';

interface PageInfo {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [pageInfo, setPageInfo] = useState<PageInfo>({
        hasPreviousPage: false,
        hasNextPage: false,
        startCursor: null,
        endCursor: null
    });
    const [loading, setLoading] = useState(true);

    const fetchPosts = useCallback(async (options: { before?: string; after?: string } = {}) => {
        setLoading(true);
        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ first: 10, filter: {}, cursorInfo: options })
            });
            const data = await res.json();
            setPosts(data.posts.map((edge: any) => edge.post));
            setPageInfo(data.pageInfo);
        } catch (err) {
            // Optionally handle error
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <Section className="banner" data-testid="banner">
                <Banner image={macbookCloseupImage}>
                    <div className="banner-container">
                        <div className="banner-content">
                            <h1>BLOG<span>.</span></h1>
                            <div className="strong-emphasis">
                                <p>A few thoughts...</p>
                            </div>
                        </div>
                    </div>
                </Banner>
            </Section>
            <Section className="blog-posts" data-testid="blog-posts">
                <div>
                    <div>
                        <Section className="blog-details">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                posts.map((post: Post) => (
                                    <BlogCardDetails key={post.databaseId} post={post} />
                                ))
                            )}
                        </Section>
                    </div>
                </div>
            </Section>
            <Pagination pageInfo={pageInfo} fetchPosts={fetchPosts} />
            <BackButton>← Back</BackButton>
        </>
    );
}
