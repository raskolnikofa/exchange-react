import React from 'react';
import { render } from '@testing-library/react';
import theme from '../plugins/mui';
import store from '../store/configureStore';

import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';

export function renderWithProviders(ui, { ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Provider store={store}>
                        <App>{children}</App>
                    </Provider>
                </BrowserRouter>
            </ThemeProvider>
        );
    }

    // Return an object with the store and all of RTL's query functions
    return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
