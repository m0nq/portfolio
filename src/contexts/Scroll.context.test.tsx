import React from 'react';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ScrollContext } from '@contexts/Scroll.context';
import { ScrollProvider } from '@contexts/Scroll.context';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useRef: jest.fn()
}));

describe('ScrollProvider', () => {
    it('renders children', () => {
        const ChildComponent = () => <div>Child Component</div>;
        render(
            <ScrollProvider>
                <ChildComponent />
            </ScrollProvider>
        );
        const childElement = screen.getByText('Child Component');
        expect(childElement).toBeInTheDocument();
    });

    it('ScrollProvider renders children', () => {
        const child = <p>This is a child element</p>;
        const { getByText } = render(<ScrollProvider>{child}</ScrollProvider>);

        expect(getByText(/This is a child element/i)).toBeInTheDocument();
    });

    it('should scroll the referenced element into view', () => {
        const TestComponent = () => {
            const { elementRef, handleScroll } = React.useContext(ScrollContext);
            return (
                <div>
                    <div ref={elementRef} style={{ height: '100px', overflow: 'auto' }}>
                        <div style={{ height: '200px' }}>Scrollable Content</div>
                    </div>
                    <button onClick={handleScroll}>Scroll Into View</button>
                </div>
            );
        };

        render(
            <ScrollProvider>
                <TestComponent />
            </ScrollProvider>
        );

        const scrollableElement = screen.getByText('Scrollable Content').parentElement as HTMLElement;
        const scrollButton = screen.getByText('Scroll Into View');

        // Click the button to scroll the element into view
        fireEvent.click(scrollButton);
        expect(scrollableElement).toBeVisible();
    });
});
