import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import { About } from '@components/about/About';

describe('About component', () => {
    it('renders the component', () => {
        render(<About />);
        const aboutContainer = screen.getByText(/Monk started his career/i);
        expect(aboutContainer).toBeInTheDocument();
    });

    test('renders Industrial Logic link', () => {
        render(<About />);
        const industrialLogicLink = screen.getByRole('link', { name: /Industrial Logic/i });
        expect(industrialLogicLink).toHaveAttribute('href', 'https://www.industriallogic.com/');
        expect(industrialLogicLink).toHaveAttribute('target', '_blank');
    });

    test('renders Ford Motors link', () => {
        render(<About />);
        const fordMotorsLink = screen.getByRole('link', { name: /Ford Motors/i });
        expect(fordMotorsLink).toHaveAttribute('href', 'https://www.ford.com/');
        expect(fordMotorsLink).toHaveAttribute('target', '_blank');
    });

    it('renders RefleXion Medical link', () => {
        render(<About />);
        const reflexionMedicalLink = screen.getByRole('link', { name: /RefleXion Medical/i });
        expect(reflexionMedicalLink).toHaveAttribute('href', 'https://reflexion.com/');
        expect(reflexionMedicalLink).toHaveAttribute('target', '_blank');
    });

    it('renders list items', () => {
        render(<About />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
        expect(listItems[0]).toHaveTextContent(/Small Businesses and Non-Profits/i);
        expect(listItems[1]).toHaveTextContent(/Creative Industries/i);
        expect(listItems[2]).toHaveTextContent(/Green Tech Companies/i);
    });
});
