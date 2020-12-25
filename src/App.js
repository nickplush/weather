import './App.css';
import {Header} from "../../../saveWeather/my-app/src/components/Header/Header";
import {MainWeatherWindow} from "../../../saveWeather/my-app/src/components/Weather/MainWeatherWindow";
import {WindowController} from "../../../saveWeather/my-app/src/components/Weather/WindowController";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {saveCityInfo} from "../../../saveWeather/my-app/src/actions/getWeather";
import {getFavorite} from "./actions/favoriteActions";

function App() {
    const dispatch = useDispatch()
    const getMyLocation = () => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const coords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                dispatch(saveCityInfo(coords))
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message)
            }
        )
        dispatch(getFavorite())
    }
    useEffect(() => getMyLocation(), [])
    return (
        <div>
            <Header/>
            <MainWeatherWindow/>
            <WindowController/>
        </div>
    );
}

export default App;
