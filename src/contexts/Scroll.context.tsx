'use client';
import { RefObject } from 'react';
import { useRef } from 'react';
import { createContext } from 'react';

import { Props } from '@data-types/data-props';

interface ScrollContextProps {
    elementRef: RefObject<HTMLDivElement> | null;
    handleScroll: () => void;
}

export const ScrollContext = createContext<ScrollContextProps>({
    elementRef: null,
    handleScroll: () => {}
});

export const ScrollProvider = ({ children }: Props) => {
    const elementRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        elementRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <ScrollContext.Provider value={{ elementRef, handleScroll }}>
                {children}
            </ScrollContext.Provider>
        </>
    );
};
