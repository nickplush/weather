import React from 'react';
import { useSelector } from 'react-redux';
import WeekWeather from '../WeekWeather';
import DayWeather from '../DayWeather';
import Home from '../Home';

const WindowController = () => {
    const window = useSelector((state) => state.window);

    const renderContent = () => {
        switch (window) {
        case 'Home':
            return <Home/>;
        case 'Today':
            return <DayWeather day={0}/>;
        case 'Tomorrow':
            return <DayWeather day={1}/>;
        case 'Week':
            return <WeekWeather/>;
        default:
            return <Home/>;
        }
    };

    return (renderContent());
};

export default WindowController;
