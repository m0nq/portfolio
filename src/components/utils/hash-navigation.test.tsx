import { act, fireEvent, render } from '@testing-library/react';

import HashNavigation from './hash-navigation';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn()
}));

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

describe('HashNavigation', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
        mockUsePathname.mockReturnValue('/');
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        document.body.innerHTML = '';
    });

    it('scrolls to the hashed element after pathname effect delay', () => {
        const target = document.createElement('div');
        target.id = 'section-1';
        const scrollIntoView = jest.fn();
        target.scrollIntoView = scrollIntoView;
        document.body.appendChild(target);

        window.history.pushState({}, '', '/#section-1');

        render(
            <HashNavigation>
                <div>content</div>
            </HashNavigation>
        );

        act(() => {
            jest.advanceTimersByTime(100);
        });

        expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('handles hashchange events within the same page', () => {
        const target = document.createElement('div');
        target.id = 'section-2';
        const scrollIntoView = jest.fn();
        target.scrollIntoView = scrollIntoView;
        document.body.appendChild(target);

        render(
            <HashNavigation>
                <div>content</div>
            </HashNavigation>
        );

        window.history.pushState({}, '', '/#section-2');
        fireEvent(window, new Event('hashchange'));

        expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('removes the hashchange listener on unmount', () => {
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
        const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

        const { unmount } = render(
            <HashNavigation>
                <div>content</div>
            </HashNavigation>
        );

        const hashChangeHandler = addEventListenerSpy.mock.calls.find(
            ([event]) => event === 'hashchange'
        )?.[1];

        expect(hashChangeHandler).toBeDefined();

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('hashchange', hashChangeHandler);

        addEventListenerSpy.mockRestore();
        removeEventListenerSpy.mockRestore();
    });
});
