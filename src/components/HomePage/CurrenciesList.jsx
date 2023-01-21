import { Grid } from '@mui/material';
import fetchCurrencies from '../../helpers/fetchCurrencies';
import { useQuery } from 'react-query';

import { Loader } from '../Loader';
import { Error } from '../Error';

import { removeUnnecessarySymbols } from '../../helpers/dataFormatter';

export const CurrenciesList = () => {
    const { data, error, isError, isLoading } = useQuery('currencies', fetchCurrencies);
    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <Error error={error.message} />;
    }

    const currencies = entries => {
        if ('fx' in entries) {
            return entries.fx.map(entry => {
                // check if proper currency name exists and flags provided
                if (!incorrectCurrency(entry.currency) && flagProvided(entry)) {
                    let flagName = entry.currency.slice(0, -1).toLowerCase();
                    return { ...entry, flagExists: true, flagName };
                }
                return { ...entry, flagExists: false };
            });
        }
    };

    const flagProvided = entry => {
        return entry.flags && entry.flags[0] === 'provided';
    };

    const incorrectCurrency = currency => {
        return removeUnnecessarySymbols(currency).length < 3;
    };

    const formattedCurrencies = currencies(data);

    return formattedCurrencies.map((currency, id) => {
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
