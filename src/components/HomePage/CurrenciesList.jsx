import { Grid } from '@mui/material';

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
};
