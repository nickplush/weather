import React from 'react';

import { Typography } from '@material-ui/core';

import { getWeatherInfo } from './helpers';
import { array, object } from 'prop-types';

const WeatherInfo = ({ classes, weather }) => weather.map(item => {
    const {
        dateTime,
        temperature,
        weatherType,
        windSpeed,
    } = getWeatherInfo(item);

    return (
        <div key = {Math.random} className={classes.day}>
            <Typography className={classes.time}>
                {dateTime}
            </Typography>
            <Typography>
                {temperature}
            </Typography>
            <Typography>
                {weatherType}
            </Typography>
            <Typography>
                {windSpeed}
            </Typography>
        </div>
    );
});

WeatherInfo.propTypes = {
    classes: object,
    weather: array,
};

export default WeatherInfo;
