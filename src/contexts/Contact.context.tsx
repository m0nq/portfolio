'use client';
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { Props } from '@data-types/data-props';

type ContactContext = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    // handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const ContactContext = createContext({} as ContactContext);

export const ContactProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    // const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    //     if (event.key === 'Escape') {
    //         setIsOpen(false);
    //     }
    // }, []);

    return (
        // <ContactContext.Provider value={{ isOpen, setIsOpen, handleKeyDown }}>{children}</ContactContext.Provider>
        <ContactContext.Provider value={{ isOpen, setIsOpen }}>{children}</ContactContext.Provider>
    );
};

export const useContactContext = () => {
    return useContext(ContactContext);
};
