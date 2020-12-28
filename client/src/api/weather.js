import WeatherClient from '../api/clients/weatherClient';
import apiResult from '../api/helpers/apiResult';

export const getWeather = async (coords) => {
    const {
        latitude: lat = '0',
        longitude: lon = '0',
    } = coords;
    const weather = await apiResult(
        WeatherClient.get('/weather', { params: { lat, lon } }),
    );
    return weather || {};
};

export const getWeekWeather = async (coords) => {
    const {
        latitude: lat = '0',
        longitude: lon = '0',
    } = coords;
    const weather = await apiResult(
        WeatherClient.get('/onecall', { params: { lat, lon, exclude: 'current,minutely,hourly,alerts' } }),
    );
    return weather || [];
};

export const getWeatherFor = async (coords, day = 0) => {
    const {
        latitude: lat = '0',
        longitude: lon = '0',
    } = coords;
    const nearestWeather = await apiResult(
        WeatherClient.get('/forecast', { params: { lat, lon, exclude: 'current,minutely,hourly,alerts' } }),
    );
    let weather = [];
    if (nearestWeather && nearestWeather.list) {
        weather = nearestWeather.list.filter(({ dt }) => {
            const todayDate = new Date().getDay() + day;
            const date = new Date(dt * 1000).getDay();
            return todayDate === date;
        });
    }
    return weather;
};
