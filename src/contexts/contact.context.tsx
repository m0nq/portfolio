'use client';
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { Props } from '@data-types/data-props';

export type ContactContext = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ContactContext = createContext({} as ContactContext);

export const ContactProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ContactContext.Provider value={{ isOpen, setIsOpen }}>{children}</ContactContext.Provider>
    );
};

export const useContactContext = () => {
    return useContext(ContactContext);
};
