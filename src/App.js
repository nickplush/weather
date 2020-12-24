import './App.css';
import {Header} from "../../../saveWeather/my-app/src/components/Header/Header";
import {MainWeatherWindow} from "../../../saveWeather/my-app/src/components/Weather/MainWeatherWindow";
import {WindowController} from "../../../saveWeather/my-app/src/components/Weather/WindowController";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {saveCityInfo} from "../../../saveWeather/my-app/src/actions/getWeather";

function App() {
  const dispatch = useDispatch()
  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
        function (position) {
          dispatch(saveCityInfo(position.coords))
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message)
        }
    )
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
