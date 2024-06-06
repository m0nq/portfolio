import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a non-empty string', () => {
        const input = 'hello';
        const expected = 'Hello';
        const result = capitalizeFirstLetter(input);
        expect(result).toBe(expected);
    });

    it('should return the same string if it starts with an uppercase letter', () => {
        const input = 'Hello';
        const expected = 'Hello';
        const result = capitalizeFirstLetter(input);
        expect(result).toBe(expected);
    });

    it('should handle an empty string', () => {
        const input = '';
        const expected = '';
        const result = capitalizeFirstLetter(input);
        expect(result).toBe(expected);
    });

    it('should handle a string with only one character', () => {
        const input = 'a';
        const expected = 'A';
        const result = capitalizeFirstLetter(input);
        expect(result).toBe(expected);
    });

    it('should handle a string with mixed casing', () => {
        const input = 'hELLO';
        const expected = 'HELLO';
        const result = capitalizeFirstLetter(input);
        expect(result).toBe(expected);
    });
});
