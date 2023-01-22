import { Card, CardContent, Typography } from '@mui/material';

export const Error = () => {
    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h1"
                    mt={4}
                    mb={4}
                >
                    Error occurred.
                </Typography>
            </CardContent>
        </Card>
    );
};
