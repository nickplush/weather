import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import WeatherDay from './components/WeatherDay';
import { getWeekWeather } from '../../../api/weather';

import classes from './style.module.css';
import { getFormattedDate } from '../DayWeather/helpers';

const WeekWeather = () => {
    const myLocation = useSelector((state) => state.myLocation);

    const [week, setWeek] = useState([]);

    const fetchWeekWeather = useCallback(async (location) => {
        const newWeek = await getWeekWeather(location);
        const { daily } = newWeek;
        setWeek(daily);
    }, []);

    useEffect(() => fetchWeekWeather(myLocation), [myLocation]);
    const dateNow = getFormattedDate(0);
    const dateWeek = getFormattedDate(8);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>Week</h2>
                <h3>{dateNow} - {dateWeek}</h3>
                <div className={classes.root}>
                    {week.map(weatherItem => <WeatherDay key = { Math.random()} classes={classes} weatherItem={weatherItem}/>)}
                </div>
            </div>
        </div>
    );
};

export default WeekWeather;
