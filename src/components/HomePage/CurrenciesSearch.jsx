import { Grid, Typography, TextField } from '@mui/material';
import theme from '../../plugins/mui';

export const CurrenciesSearch = () => {
    return (
        <Grid
            container
            spacing={2}
            style={{ color: theme.palette.secondary.contrastText, backgroundColor: theme.palette.secondary.main }}
        >
            <Grid
                item
                xs={4}
                sm={1}
            >
                <Typography
                    variant="h6"
                    mr={4}
                >
                    Search
                </Typography>
            </Grid>
            <Grid
                item
                xs={8}
                sm={3}
            >
                <TextField
                    sx={{ width: '100%', height: '80%' }}
                    variant="standard"
                    style={{
                        color: theme.palette.secondary.main,
                        backgroundColor: theme.palette.secondary.contrastText,
                    }}
                />
            </Grid>
        </Grid>
    );
};
