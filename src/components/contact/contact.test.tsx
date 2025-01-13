import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import { Contact } from './contact';
import { ContactContext } from '@contexts/contact.context';

const mockSetIsOpen = jest.fn();

// Mock the Calendly InlineWidget component
jest.mock('react-calendly', () => ({
    InlineWidget: () => <div data-testid="calendly-widget">Calendly Widget</div>
}));

describe('Contact', () => {
    it('should render the Calendly widget when open', () => {
        render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );

        expect(screen.getByTestId('calendly-widget')).toBeInTheDocument();
        expect(screen.getByLabelText('Close calendar')).toBeInTheDocument();
    });

    it('should not render when isOpen is false', () => {
        render(
            <ContactContext.Provider value={{ isOpen: false, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );

        expect(screen.queryByTestId('calendly-widget')).not.toBeInTheDocument();
    });

    it('should close when clicking the close button', () => {
        render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );

        const closeButton = screen.getByLabelText('Close calendar');
        fireEvent.click(closeButton);

        expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });

    it('should close when clicking outside the modal', () => {
        render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );

        const overlay = screen.getByRole('presentation');
        fireEvent.click(overlay);

        expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });

    it('should close when pressing escape key', () => {
        render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: mockSetIsOpen }}>
                <Contact />
            </ContactContext.Provider>
        );

        fireEvent.keyDown(window, { key: 'Escape' });

        expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });
});
