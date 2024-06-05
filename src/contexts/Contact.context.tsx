'use client';
import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

type ContactContext = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ContactContext = createContext({} as ContactContext);

export const ContactProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ContactContext.Provider value={{ isOpen, setIsOpen }}>{children}</ContactContext.Provider>
    );
};

