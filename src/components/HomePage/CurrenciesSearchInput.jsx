import { Grid, Typography, TextField } from '@mui/material';
import theme from '../../plugins/mui';

export const CurrenciesSearchInput = ({ searchValue, onChange }) => {
    return (
        <Grid
            container
            spacing={2}
            pb={1}
            style={{ color: theme.palette.secondary.contrastText, backgroundColor: theme.palette.secondary.main }}
        >
            <Grid
                item
                xs={4}
                sm={1}
            >
                <Typography variant="h6">Search</Typography>
            </Grid>
            <Grid
                item
                xs={8}
                sm={3}
                pr={1}
            >
                <TextField
                    value={searchValue}
                    sx={{ width: '100%', height: '80%' }}
                    variant="standard"
                    style={{
                        color: theme.palette.secondary.main,
                        backgroundColor: theme.palette.secondary.contrastText,
                    }}
                    onChange={onChange}
                />
            </Grid>
        </Grid>
    );
};