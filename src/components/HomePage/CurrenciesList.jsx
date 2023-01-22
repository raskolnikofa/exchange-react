import { Grid } from '@mui/material';
import { Loader } from '../Loader';
import { Error } from '../Error';

import { getAllCurrenciesAsync } from '../../store/slices/currencySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { formatOriginalCurrencies } from '../../helpers/dataFormatter';
import { CURRENCIES_OBJ } from '../../helpers/constants';

export const CurrenciesList = () => {
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
            <Grid
                key={id}
                container
                pt={2}
                spacing={2}
            >
                <Grid
                    item
                    xs={3}
                >
                    {!!currency.flagExists && (
                        <img
                            src={`../flags/${currency.flagName}.png`}
                            alt={currency.currency}
                            onError={({ currentTarget }) => (currentTarget.style.display = 'none')}
                        />
                    )}
                </Grid>
                <Grid
                    item
                    xs={3}
                >
                    {currency.nameI18N}
                </Grid>
                <Grid
                    item
                    xs={3}
                >
                    {currency.currency}
                </Grid>
                <Grid
                    item
                    xs={3}
                >
                    Sell: {!!currency.exchangeRate && currency.exchangeRate.sell}
                    Buy: {!!currency.exchangeRate && currency.exchangeRate.buy}
                </Grid>
            </Grid>
        );
    });
};
