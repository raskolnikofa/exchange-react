import { Card, CardContent, Typography } from '@mui/material';

export const NotFound = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h1"
                            mt={4}
                            mb={4}>
                    Page Not Found
                </Typography>
            </CardContent>
        </Card>
    );
};
