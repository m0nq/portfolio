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

    const handleNext = async () => {
        if (!pageInfo.endCursor) return;
        setLoading(true);
        await fetchPosts({ after: pageInfo.endCursor });
        setLoading(false);
    };

    return (
        <nav className="pagination-wrapper">
            <div>
                {pageInfo.hasNextPage && (
                    <button onClick={handleNext} disabled={loading || !pageInfo.hasNextPage}>
                        Older Posts →
                    </button>
                )}
            </div>
        </nav>
    );
};
