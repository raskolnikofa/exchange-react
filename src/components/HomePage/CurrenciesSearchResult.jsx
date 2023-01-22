import { Loader } from '../Loader';
import { Error } from '../Error';
import { CurrenciesList } from './CurrenciesList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCurrenciesAsync } from '../../store/slices/currencySlice';

import { CURRENCIES_OBJ } from '../../helpers/constants';
import { formatOriginalCurrencies } from '../../helpers/dataFormatter';

export const CurrenciesSearchResult = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCurrenciesAsync());
    }, [dispatch]);

    const { loading, error, allCurrencies, filter } = useSelector(state => state.currency);

    if (loading) return <Loader />;
    if (error) return <Error />;

    let filteredCurrencies = [];
    if (CURRENCIES_OBJ in allCurrencies) {
        const formatted = formatOriginalCurrencies(allCurrencies);
        filteredCurrencies = formatted.filter(entry => {
            return entry.currency && entry.currency.includes(filter.toUpperCase());
        });
    }

    return filteredCurrencies.map((currency, id) => {
        return (
            <CurrenciesList
                currency={currency}
                key={id}
            />
        );
    });
};
