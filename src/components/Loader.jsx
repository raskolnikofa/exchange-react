import { Box, LinearProgress } from '@mui/material';

export const Loader = () => {
    return (
        <Box
            sx={{ width: '100%' }}
            pt={6}
        >
            <LinearProgress />
        </Box>
    );
};
