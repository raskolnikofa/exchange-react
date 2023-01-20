import { Grid } from '@mui/material';

export const CurrenciesList = () => {
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
                Flag
            </Grid>
            <Grid
                item
                xs={3}
            >
                Country
            </Grid>
            <Grid
                item
                xs={3}
            >
                Currency
            </Grid>
            <Grid
                item
                xs={3}
            >
                Exchange rate
            </Grid>
        </Grid>
    );
};
