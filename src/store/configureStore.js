import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './slices/currencySlice';

const store = configureStore({
    reducer: {
        currency: currencySlice.reducer,
    },
});

export const currencyActions = currencySlice.actions;

export default store;
