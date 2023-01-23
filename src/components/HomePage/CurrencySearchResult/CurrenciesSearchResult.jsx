import { Loader } from '../../Loader';
import { Error } from '../../Error';
import { CurrenciesList } from './CurrenciesList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllCurrenciesAsync } from '../../../store/slices/currencySlice';

import { CURRENCIES_OBJ, CURRENCY_COUNTRY } from '../../../helpers/constants';
import { formatOriginalCurrencies } from '../../../helpers/dataFormatter';
import { currencyActions } from '../../../store/configureStore';
import { CurrenciesNotFound } from './CurrenciesNotFound';

export const CurrenciesSearchResult = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(getAllCurrenciesAsync());
    }, [dispatch]);

    useEffect(() => {
        const { hash } = location;
        dispatch(currencyActions.setFilter(hash.slice(1)));
    }, [dispatch, location]);

    const { loading, error, allCurrencies, filter } = useSelector(state => state.currency);

    if (loading) return <Loader />;
    if (error) return <Error />;

    let filteredCurrencies = [];
    if (CURRENCIES_OBJ in allCurrencies) {
        const formatted = formatOriginalCurrencies(allCurrencies);
        filteredCurrencies = formatted.filter(entry => {
            return (
                entry.currency &&
                (entry.currency.includes(filter.toUpperCase()) ||
                    entry[CURRENCY_COUNTRY].toUpperCase().includes(filter.toUpperCase()))
            );
        });
    }

    if (filteredCurrencies.length < 1) return <CurrenciesNotFound />;

    return filteredCurrencies.map((currency, id) => {
        return (
            <CurrenciesList
                currency={currency}
                key={id}
            />
        );
    });
};
