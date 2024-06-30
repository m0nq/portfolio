import React from 'react';
import { fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ContactProvider } from '@contexts/contact.context';
import { ContactContext } from '@contexts/contact.context';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useRef: jest.fn()
}));

describe('ContactProvider', () => {
    it('renders children', () => {
        const ChildComponent = () => <div>Child Component</div>;
        render(
            <ContactProvider>
                <ChildComponent />
            </ContactProvider>
        );
        const childElement = screen.getByText('Child Component');
        expect(childElement).toBeInTheDocument();
    });

    it('ContactProvider renders children', () => {
        const child = <p>This is a child element</p>;
        const { getByText } = render(<ContactProvider>{child}</ContactProvider>);

        expect(getByText(/This is a child element/i)).toBeInTheDocument();
    });

    it('initializes isOpen state to false', () => {
        const TestComponent = () => {
            const { isOpen } = React.useContext(ContactContext);
            return <div>{isOpen ? 'Open' : 'Closed'}</div>;
        };

        const { getByText } = render(
            <ContactProvider>
                <TestComponent />
            </ContactProvider>
        );

        expect(getByText('Closed')).toBeInTheDocument();
    });

    it('updates isOpen state using setIsOpen', () => {
        const TestComponent = () => {
            const { isOpen, setIsOpen } = React.useContext(ContactContext);
            return (
                <div>
                    <div>{isOpen ? 'Open' : 'Closed'}</div>
                    <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
                </div>
            );
        };

        const { getByText } = render(
            <ContactProvider>
                <TestComponent />
            </ContactProvider>
        );

        const toggleButton = getByText('Toggle');
        const stateElement = getByText('Closed');

        expect(stateElement).toBeInTheDocument();

        fireEvent.click(toggleButton);
        expect(getByText('Open')).toBeInTheDocument();

        fireEvent.click(toggleButton);
        expect(getByText('Closed')).toBeInTheDocument();
    });
});
