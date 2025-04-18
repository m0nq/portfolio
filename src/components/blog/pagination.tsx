'use client';
import { useState } from 'react';

interface PaginationProps {
    pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
    };
    fetchPosts: (options: { before?: string; after?: string }) => Promise<void>;
}

export const Pagination = ({ pageInfo, fetchPosts }: PaginationProps) => {
    const [loading, setLoading] = useState(false);

    const handlePrev = async () => {
        if (!pageInfo.startCursor) return;
        setLoading(true);
        await fetchPosts({ before: pageInfo.startCursor });
        setLoading(false);
    };

    const handleNext = async () => {
        if (!pageInfo.endCursor) return;
        setLoading(true);
        await fetchPosts({ after: pageInfo.endCursor });
        setLoading(false);
    };

    return (
        <nav className="pagination-wrapper">
            <div>
                {pageInfo.hasPreviousPage && (
                    <button onClick={handlePrev} disabled={loading}>
                        ← Newer Posts
                    </button>
                )}
            </div>
            <div>
                {pageInfo.hasNextPage && (
                    <button onClick={handleNext} disabled={loading}>
                        Older Posts →
                    </button>
                )}
            </div>
        </nav>
    );
};
