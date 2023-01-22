import { Card, CardContent, Typography } from '@mui/material';

export const Error = () => {
    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h1"
                    component="h2"
                    mt={4}
                    mb={4}
                >
                    Error occurred.
                </Typography>
            </CardContent>
        </Card>
    );
};
