import { Card, CardContent, Typography } from '@mui/material';

export const NotFound = () => {
    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h1"
                    component="h2"
                    mt={4}
                    mb={4}
                >
                    Page Not Found
                </Typography>
            </CardContent>
        </Card>
    );
};
