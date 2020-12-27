import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { number } from 'prop-types';

import { Typography } from '@material-ui/core';

import { getWeatherFor } from '../../../api/weather';
import WeatherInfo from './components/WeatherInfo';
import LocationMap from './components/LocationMap';
import {
    getFormattedDate,
    getDayTitle,
} from './helpers';

import classes from './style.module.css';

const DayWeather = ({ day }) => {
    const myLocation = useSelector((state) => state.myLocation);

    const [todayWeather, setTodayWeather] = useState([]);

    const fetchDayWeather = useCallback(async (location, day) => {
        const newDay = await getWeatherFor(location, day);
        setTodayWeather(newDay);
    }, []);

    useEffect(() => {
        fetchDayWeather(myLocation, day);
    }, [myLocation, day]);

    const date = getFormattedDate(day);
    const dayTitle = getDayTitle(day);

    return (
        <div className="container">
            <div className={classes.container}>
                <Typography variant="h3">{dayTitle}</Typography>
                <Typography variant="h5">{date}</Typography>
                <div className="title_container">
                    <div className={classes.time}>Time</div>
                    <div>Weather</div>
                </div>
                <WeatherInfo classes={classes} weather={todayWeather}/>
            </div>
            <div>
                <LocationMap location={myLocation} classes={classes} />
            </div>
        </div>
    );
};

DayWeather.propTypes = {
    day: number,
};

export default DayWeather;
