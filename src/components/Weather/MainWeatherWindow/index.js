import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';

import { getWeather } from '../../../api/weather';
import { replaceFavorites } from '../../../actions/favoriteActions';
import { prepareFavorite } from './helpers';

import WeatherInfo from './components/WeatherInfo';

const MainWeatherWindow = () => {
    const dispatch = useDispatch();
    const myLocation = useSelector((state) => state.myLocation);
    const favorites = useSelector(state => state.favorite);

    const [weather, setWeather] = useState('');

    const getWeatherOfMyLocation = async () => {
        if (myLocation) {
            const newWeather = await getWeather(myLocation);
            setWeather(newWeather);
        }
    };

    useEffect(() => getWeatherOfMyLocation(), [myLocation]);

    const saveCity = () => {
        const newFavorite = prepareFavorite(weather, myLocation);
        const updated = [...favorites, newFavorite];
        dispatch(replaceFavorites(updated));
    };

    return (
        <>
            { weather
                ? <WeatherInfo
                    weather={weather}
                    favorites={favorites}
                    myLocation={myLocation}
                    saveCity={saveCity}
                />
                : <Typography variant={'h3'}>Geolocation unspecified</Typography>
            }
        </>
    );
};

export default MainWeatherWindow;
