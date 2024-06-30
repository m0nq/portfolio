'use client';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const BackButton = ({ className, children }: PropsWithChildren<{ className?: string; }>) => {
    const router = useRouter();

    return (
        <button className={className} onClick={() => router.back()}>
            {children}
        </button>
    );
};
