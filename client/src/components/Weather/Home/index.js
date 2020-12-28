import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Box,
    Grid,
    Typography,
} from '@material-ui/core';

import { saveCityInfo } from '../../../actions/city';

import classes from './classes.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorite);

    const changeCity = useCallback((coords) => {
        dispatch(saveCityInfo(coords));
    }, []);

    const renderFavorites = () => favorites.map(item => {
        const {
            coords,
            city,
        } = item;
        return (
            <Grid key={coords.latitude} item xs={2} >
                <Box border={1} className={classes.card} onClick={() => changeCity(coords)}>
                    <Typography component="div" >{city}</Typography>
                </Box>
            </Grid>
        );
    });

    return (
        <div className={classes.main}>
            <h2>Saved cities</h2>
            <div className={classes.root}>
                <div className={classes.container}>
                    <Grid container spacing={10}>
                        {renderFavorites()}
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Home;
