import { Card, CardContent, Typography } from '@mui/material';

export const CurrenciesNotFound = () => {
    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h1"
                    component="h2"
                    mt={4}
                    mb={4}
                >
                    Nothing was found.
                </Typography>
            </CardContent>
        </Card>
    );
};
