import './App.css';
import {Header} from "../src/components/Header/Header";
import {MainWeatherWindow} from "../src/components/Weather/MainWeatherWindow";
import {WindowController} from "../src/components/Weather/WindowController";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {saveCityInfo} from "../src/actions/getWeather";
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
