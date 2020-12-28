import { getWeatherInfo } from '../../../DayWeather/components/WeatherInfo/helpers';
import { isCoordsTheSame } from '../../helpers';
import { Box, Typography } from '@material-ui/core';
import classes from '../../style.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import { array, func, object } from 'prop-types';

const WeatherInfo = ({
    favorites,
    myLocation,
    weather,
    saveCity,
}) => {
    const {
        windSpeed,
        temperature,
        city,
        weatherType,
    } = getWeatherInfo(weather);
    const isLocationUnsaved = !favorites.some(favorite => isCoordsTheSame(myLocation, favorite));
    return (
        <div>
            <Box border={1} className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <Typography variant={'h3'}>{temperature}</Typography>
                        <Typography variant={'h4'}>{city}</Typography>
                        <Typography variant={'h6'}>{weatherType} </Typography>
                        <Typography variant={'h6'}>{windSpeed}</Typography>
                    </div>
                </div>
                {isLocationUnsaved && (
                    <div className={classes.addBut}>
                        <AddCircleOutlineIcon onClick={saveCity} style={{ fontSize: 40 }}/>
                    </div>
                )}
            </Box>
        </div>
    );
};

WeatherInfo.propTypes = {
    favorites: array,
    myLocation: object,
    weather: object,
    saveCity: func,
};

export default WeatherInfo;
