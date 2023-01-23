import { renderWithProviders } from '../../../../utils/test-utils';
import { screen } from '@testing-library/react';
import { CurrenciesList } from '../CurrenciesList';

// without axios !!!
describe('Currencies list', () => {
    it('should have image src', () => {
        renderWithProviders(<CurrenciesList />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
    });

    it('should have exchange rate', () => {
        renderWithProviders(<CurrenciesList />);
        const sell = screen.getByText(/sell: 1/i);
        expect(sell).toBeInTheDocument();
    });
});
