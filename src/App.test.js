import { render, screen } from '@testing-library/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import App from './App';

describe('App', () => {
    it('should redirect to page 404 in case of bad route', () => {
        const badRoute = '/test';

        render(
            <MemoryRouter initialEntries={[badRoute]}>
                <App store={store} />
            </MemoryRouter>
        );

        expect(screen.getByText(/Page Not Found/i, {})).toBeInTheDocument();
    });

    // eslint-disable-next-line jest/expect-expect
    it('should be rendered successfully with router and redux', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        );
    });
});
