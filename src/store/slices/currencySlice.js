import { createSlice } from '@reduxjs/toolkit';
const axios = require('axios');
const API_URL = 'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343';

const initialState = {
    loading: false,
    allCurrencies: [],
    filter: '',
    filteredCurrencies: [],
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setLoading(state, value) {
            state.loading = value;
        },
        getAllCurrencies: (state, action) => {
            state.allCurrencies = [action.payload];
        },
        setFilter(state, value) {
            state.filter = value;
        },
        filterCurrencies() {},
    },
});

export const getAllCurrenciesAsync = () => async dispatch => {
    try {
        const response = await axios.get(API_URL);
        dispatch(getAllCurrencies(response.data));
    } catch (err) {
        throw new Error(err);
    }
};

export const { getAllCurrencies } = currencySlice.actions;
export const showFilteredCurrencies = state => state.currency.filteredCurrencies;
export default currencySlice;
