import React from 'react';

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
        <tr key={dateTime}>
            <td className={classes.time}>
                {dateTime}
            </td>
            <td className={classes.weather}>
                {temperature}
            </td>
            <td className={classes.weather}>
                {weatherType}
            </td>
            <td className={classes.weather}>
                {windSpeed}
            </td>
        </tr>
    );
});

WeatherInfo.propTypes = {
    classes: object,
    weather: array,
};

export default WeatherInfo;
