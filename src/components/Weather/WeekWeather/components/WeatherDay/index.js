import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { getWeatherInfo } from './helpers';
import { object } from 'prop-types';

const WeatherDay = ({ classes, weatherItem }) => {
    const {
        weatherType,
        weekDay,
        dayTemperature,
    } = getWeatherInfo(weatherItem);
    return (
        <Box border={1} className={classes.card}>
            <Typography component="div">{weekDay}</Typography>
            <Typography component="div">{dayTemperature}</Typography>
            <Typography component="div">{weatherType}</Typography>
        </Box>
    );
};

WeatherDay.propTypes = {
    classes: object,
    weatherItem: object,
};

export default WeatherDay;
