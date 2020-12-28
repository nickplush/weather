import './App.css';
import Header from './components/Header/Header';
import MainWeatherWindow from './components/Weather/MainWeatherWindow';
import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Weather/Home';
import WeatherDay from './components/Weather/DayWeather';
import WeekWeather from './components/Weather/WeekWeather';
import { saveCityInfo } from './actions/city';
import { getFavorites } from './actions/favoriteActions';
import { useDispatch } from 'react-redux';

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
        <BrowserRouter>
            <Header/>
            <MainWeatherWindow/>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/today'}>
                <WeatherDay day={0}/>
            </Route>
            <Route path={'/tomorrow'}>
                <WeatherDay day={1}/>
            </Route>
            <Route path={'/week'} component={WeekWeather}/>
        </BrowserRouter>
    );
}

export default App;
