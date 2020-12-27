import { WEEKDAYS } from './constants';

const getDayTemperature = (weatherItem) => {
    const { day: kelvinTemp } = weatherItem.temp;
    const celsiusTemp = Math.round(kelvinTemp - 273.15);
    return `${celsiusTemp} ℃`;
};

const getWeatherType = (weatherItem) => weatherItem.weather[0].main;

const getWeekDay = (weatherItem) => {
    const date = new Date(weatherItem.dt * 1000);
    const weekDay = WEEKDAYS[date.getDay()];
    return weekDay;
};

export const getWeatherInfo = (weatherItem, timezoneOffset) => {
    const dayTemperature = getDayTemperature(weatherItem);
    const weatherType = getWeatherType(weatherItem);
    const weekDay = getWeekDay(weatherItem);
    return {
        dayTemperature,
        weatherType,
        weekDay,
    };
};
