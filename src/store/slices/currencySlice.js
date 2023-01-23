import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { CURRENCIES_API } from '../../helpers/constants';

const initialState = {
    loading: false,
    error: false,
    filter: '',
    allCurrencies: []
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        getAllCurrencies: (state, action) => {
            state.allCurrencies = action.payload;
        },
        setFilter(state, value) {
            state.filter = value.payload;
        },
    },
});

export const getAllCurrenciesAsync = () => async dispatch => {
    dispatch(setLoading(true));
    try {
        await axios.get(CURRENCIES_API).then(response => {
            dispatch(getAllCurrencies(response.data));
            dispatch(setLoading(false));
        });
    } catch (err) {
        dispatch(setLoading(false));
        dispatch(setError(true));
        throw new Error(err);
    }
};

export const { setLoading, setError, getAllCurrencies } = currencySlice.actions;
export default currencySlice;
