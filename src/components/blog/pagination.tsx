'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
    pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
    };
}

export const Pagination = ({ pageInfo }: PaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);

    const handleNext = async () => {
        if (!pageInfo.endCursor) return;
        setLoading(true);
        const params = new URLSearchParams(searchParams.toString());
        params.set('cursor', pageInfo.endCursor);
        router.push(`?${params.toString()}`);
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
