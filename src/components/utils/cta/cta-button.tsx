'use client';
import { ReactNode } from 'react';

import { useContactContext } from '@contexts/contact.context';

export const CTAButton = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
    const { setIsOpen } = useContactContext();

    return (
        <>
            <button className={className} onClick={() => setIsOpen(true)}>
                {children}
            </button>
        </>
    );
};
