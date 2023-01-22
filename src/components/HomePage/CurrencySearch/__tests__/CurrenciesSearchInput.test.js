import { render, screen } from '@testing-library/react';
import { CurrenciesSearchInput } from '../CurrenciesSearchInput';

describe('Currencies search input', () => {
    it('should include text', () => {
        render(<CurrenciesSearchInput />);
        const text = screen.getByRole('heading', {  name: /search/i})
        expect(text).toBeInTheDocument();
    });
});
