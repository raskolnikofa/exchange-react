import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CURRENCIES_API } from '../../helpers/constants';

const initialState = {
    loading: false,
    error: false,
    allCurrencies: [],
    filter: ''
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
        const response = await axios.get(CURRENCIES_API).finally(dispatch(setLoading(false)));
        dispatch(getAllCurrencies(response.data));
    } catch (err) {
        dispatch(setLoading(false));
        dispatch(setError(true));
        throw new Error(err);
    }
};


export const { setLoading, setError, getAllCurrencies } = currencySlice.actions;
export default currencySlice;
