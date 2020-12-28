import './App.css';
import Header from './components/Header/Header';
import MainWeatherWindow from './components/Weather/MainWeatherWindow';
import WindowController from './components/Weather/WindowController';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { saveCityInfo } from './actions/city';
import { getFavorites } from './actions/favoriteActions';

function App () {
    const dispatch = useDispatch();
    const getMyLocation = () => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const coords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                dispatch(saveCityInfo(coords));
            },
            function (error) {
                console.error('Error Code = ' + error.code + ' - ' + error.message);
            },
        );
        dispatch(getFavorites());
    };
    useEffect(() => getMyLocation(), []);
    return (
        <div>
            <Header/>
            <MainWeatherWindow/>
            <WindowController/>
        </div>
    );
}

export default App;
