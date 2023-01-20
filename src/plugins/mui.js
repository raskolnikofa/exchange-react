import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
            contrastText: '#fff',
        },
        secondary: {
            main: '#333333',
            contrastText: '#fff',
        },
        inputWhite: '#fff',
    },
});

export default theme;
