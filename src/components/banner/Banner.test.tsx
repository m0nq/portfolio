import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Banner } from './Banner';
import { ContactContext } from '@contexts/Contact.context';

describe('Banner', () => {
    it('renders the banner image', () => {
        const { getByTestId } = render(<Banner />);
        const bannerImage = getByTestId('mock-static-image');
        expect(bannerImage).toBeInTheDocument();
    });

    it('renders the heading', () => {
        const { getByText } = render(<Banner />);
        const heading = getByText('MONK WELLINGTON');
        expect(heading).toBeInTheDocument();
    });

    it('renders the button', () => {
        const { getByText } = render(<Banner />);
        const button = getByText('Get in touch!');
        expect(button).toBeInTheDocument();
    });

    it('calls setIsOpen when the button is clicked', () => {
        const setIsOpenMock = jest.fn();
        const { getByText } = render(
            <ContactContext.Provider value={{ isOpen: true, setIsOpen: setIsOpenMock }}>
                <Banner />
            </ContactContext.Provider>
        );
        const button = getByText('Get in touch!');
        fireEvent.click(button);
        expect(setIsOpenMock).toHaveBeenCalledWith(true);
    });
});
