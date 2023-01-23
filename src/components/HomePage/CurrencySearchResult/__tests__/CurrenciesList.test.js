import { render, screen } from '@testing-library/react';
import { CurrenciesList } from '../CurrenciesList';

const currency = {
    currency: 'USD',
    flagExists: true,
    flagName: '',
    nameI18N: 'US',
    exchangeRate: {
        buy: 1,
        sell: 1
    }
}

describe('Currencies list', () => {
    it('should have image src', () => {
        render(<CurrenciesList currency={currency} />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
    });

    it('should have exchange rate', () => {
        render(<CurrenciesList currency={currency} />);
        const sell = screen.getByText(/sell: 1/i);
        expect(sell).toBeInTheDocument();
    });
});
