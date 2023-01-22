import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
    it('should include text', () => {
        render(<Header />);
        const text = screen.getByRole('heading', { name: /george fe test/i });
        expect(text).toBeInTheDocument();
    });
});
