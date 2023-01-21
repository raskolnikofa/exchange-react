import { Card, CardContent, Typography } from '@mui/material';

export const Error = ({ error }) => {
    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h1"
                    mt={4}
                    mb={4}
                >
                    {error}
                </Typography>
            </CardContent>
        </Card>
    );
};
