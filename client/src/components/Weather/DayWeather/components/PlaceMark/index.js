import React, { useEffect, useState } from 'react';
import { getCoords } from '../LocationMap/helpers';
import { Placemark } from 'react-yandex-maps';
import { getWeather } from '../../../../../api/weather';
import { useSelector } from 'react-redux';
import { getWeatherInfo } from '../WeatherInfo/helpers';
import { object } from 'prop-types';

const PlaceMark = ({ location }) => {
    const myLocation = useSelector((state) => state.myLocation);
    const [weather, setWeather] = useState('');

    const getWeatherOfMyLocation = async () => {
        if (myLocation) {
            const newWeather = await getWeather(myLocation);
            setWeather(newWeather);
        }
    };

    useEffect(() => getWeatherOfMyLocation(), [myLocation]);

    const renderPlaceMarks = (location) => getCoords(location).map(coordinate =>
        <Placemark
            key={Math.random()}
            geometry={coordinate}
            {...property}
        />);

    const {
        temperature,
        weatherType,
    } = getWeatherInfo(weather);

    const property = {
        properties: {
            hintContent: 'Это хинт',
            balloonContent: `${temperature}, ${weatherType}`,
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    };

    return (
        renderPlaceMarks(location)
    );
};

PlaceMark.propTypes = {
    location: object,
};

export default PlaceMark;
