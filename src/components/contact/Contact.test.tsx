import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Contact } from './Contact';
import { ContactContext } from '@contexts/Contact.context';

const mockSetIsOpen = jest.fn();
const mockHandleSubmit = jest.fn(() => {});

jest.mock('@formspree/react', () => ({
    ValidationError: () => null,
    useForm: () => [true, mockHandleSubmit]
}));

describe('Contact', () => {
    beforeAll(() => {
        let portalRoot = document.getElementById('portal');
        if (!portalRoot) {
            portalRoot = document.createElement('div');
            portalRoot.setAttribute('id', 'portal');
            document.body.appendChild(portalRoot);
        }
    });

    beforeEach(() => {
        render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );
    });

    it('renders the component when isOpen is true', () => {
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Message')).toBeInTheDocument();
    });

    it('handles form input changes', () => {
        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Message');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });

        expect(nameInput).toHaveValue('John Doe');
        expect(emailInput).toHaveValue('john@example.com');
        expect(messageInput).toHaveValue('Hello, world!');
    });

    it('displays validation errors for invalid form data', () => {
        const submitButton = screen.getByText('Send');

        fireEvent.click(submitButton);

        expect(screen.getByText('You need a few more characters here...')).toBeInTheDocument();
        expect(screen.getByText('That doesn\'t look right...')).toBeInTheDocument();
        expect(screen.getByText('Nothing to say...? 🤔')).toBeInTheDocument();
    });
});
