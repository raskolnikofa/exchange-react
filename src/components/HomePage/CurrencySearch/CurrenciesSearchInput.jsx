import { Grid, Typography, TextField } from '@mui/material';
import theme from '../../../plugins/mui';
import styles from './CurrenciesSearchInput.module.css';

import { useEffect } from 'react';
import { useState } from 'react';

export const CurrenciesSearchInput = ({ searchValue, onChange }) => {
    useEffect(() => {
        window.addEventListener('scroll', e => handleScroll(e));
    }, []);

    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        const header = document.querySelector('#header');
        const headerRect = header.getBoundingClientRect();
        setSticky(headerRect.top < -50);
    };

    return (
        <Grid
            container
            spacing={2}
            pb={1}
            className={sticky ? styles.sticky : ''}
            style={{ color: theme.palette.secondary.contrastText, backgroundColor: theme.palette.secondary.main }}
        >
            <Grid
                item
                xs={4}
                sm={1}
            >
                <Typography
                    variant="h6"
                    component="h2"
                >
                    Search
                </Typography>
            </Grid>
            <Grid
                item
                xs={8}
                sm={3}
                pr={1}
            >
                <TextField
                    value={searchValue}
                    sx={{ width: '100%', height: '80%' }}
                    className={styles.hiddenLabel}
                    variant="standard"
                    label="Search"
                    style={{
                        color: theme.palette.secondary.main,
                        backgroundColor: theme.palette.secondary.contrastText,
                    }}
                    onChange={onChange}
                />
            </Grid>
        </Grid>
    );
};
