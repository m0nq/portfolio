'use client';

import Link from 'next/link';

export default function BlogPostError(props: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { error, reset } = props;

    return (
        <main className="p-7">
            <h1 className="text-2xl font-semibold">This post is temporarily unavailable</h1>
            <p className="mt-3 max-w-prose opacity-80">
                Something went wrong while loading this article. Please try again, or come back later.
            </p>
            {error?.digest && (
                <p className="mt-3 text-sm opacity-60">
                    Error ID: <span className="font-mono">{error.digest}</span>
                </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => reset()}
                    className="rounded-md bg-black px-4 py-2 text-white"
                >
                    Try again
                </button>
                <Link href="/blog" className="rounded-md border px-4 py-2">
                    Back to blog
                </Link>
            </div>
        </main>
    );
}

