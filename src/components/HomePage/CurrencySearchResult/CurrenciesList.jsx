import { Grid, Typography } from '@mui/material';
import { CURRENCY_COUNTRY } from '../../../helpers/constants';

export const CurrenciesList = ({ currency }) => {
    return (
        <Grid
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
                        width="105"
                        height="71"
                        onError={({ currentTarget }) => (currentTarget.src = '../404.png')}
                    />
                )}
            </Grid>
            <Grid
                item
                xs={3}
            >
                {currency[CURRENCY_COUNTRY]}
            </Grid>
            <Grid
                item
                xs={3}
            >
                {currency.currency}
            </Grid>
            {!!currency.exchangeRate && (
                <Grid
                    item
                    xs={3}
                >
                    <Typography>Sell: {currency.exchangeRate.sell}</Typography>
                    <Typography>Buy: {currency.exchangeRate.buy}</Typography>
                </Grid>
            )}
        </Grid>
    );
};
