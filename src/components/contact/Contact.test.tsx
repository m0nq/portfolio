import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Contact } from './Contact';
import { ContactContext } from '@contexts/Contact.context';

jest.mock('@formspree/react', () => ({
    ValidationError: () => null,
    useForm: () => [{ succeeded: false }, mockHandleSubmit]
}));

const mockSetIsOpen = jest.fn();
const mockHandleSubmit = jest.fn().mockReturnValue({ succeeded: true });

describe('Contact', () => {
    it('should render the contact form', () => {
        render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );

        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Message')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
    });

    it('should show error messages for invalid form inputs', async () => {
        render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );

        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Message');
        const submitButton = screen.getByRole('button', { name: 'Send' });

        userEvent.type(nameInput, 'John');
        userEvent.type(emailInput, 'invalid-email');
        userEvent.type(messageInput, '');

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('You need a few more characters here...')).toBeInTheDocument();
            expect(screen.getByText('That doesn\'t look right...')).toBeInTheDocument();
            expect(screen.getByText('Nothing to say...? 🤔')).toBeInTheDocument();
        });
    });

    // TODO: Figure out why mock isn't returning true for succeeded: true
    // it('should show success message after form submission', async () => {
    //     render(
    //         <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
    //             <Contact />
    //         </ContactContext.Provider>
    //     );
    //
    //     const nameInput = screen.getByLabelText('Name');
    //     const emailInput = screen.getByLabelText('Email');
    //     const messageInput = screen.getByLabelText('Message');
    //     const submitButton = screen.getByRole('button', { name: 'Send' });
    //
    //     await userEvent.type(nameInput, 'john@example.com');
    //     await userEvent.type(emailInput, 'john@example.com');
    //     await userEvent.type(messageInput, 'Hello, this is a test message.');
    //
    //     await userEvent.click(submitButton);
    //
    //     await waitFor(() => {
    //         expect(mockHandleSubmit).toHaveBeenCalled();
    //         expect(screen.getByText('Thanks for the message!')).toBeInTheDocument();
    //         expect(screen.getByText('I should get back to you within 24 hours.')).toBeInTheDocument();
    //         expect(screen.getByRole('button', { name: '← Thanks!' })).toBeInTheDocument();
    //     });
    // });
});
