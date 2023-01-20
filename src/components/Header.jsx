import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="primary"
                id="header"
            >
                <Toolbar>
                    <Typography
                        variant="h4"
                        mt={4}
                        mb={4}
                    >
                        George FE Test
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
