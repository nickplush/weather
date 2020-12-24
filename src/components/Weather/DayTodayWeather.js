import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getDayWeather} from "../../actions/getWeather";
import {Typography} from "@material-ui/core";
import {Map, Placemark, YMaps} from "react-yandex-maps";

export const DayTodayWeather = () => {
    const myLocation = useSelector((state) => state.myLocation)
    const [data, setData] = useState([])

    const fetchDayWeather = async () => {
        const newDay = await getDayWeather(myLocation)
        setData(newDay)
    }
    useEffect(() => fetchDayWeather(), [myLocation])
    const weatherDay = data.map(item => {
        return (
            <div>
                <Typography >
                    {new Date(item.dt * 1000).getHours()}:{new Date(item.dt).getMinutes()}
                    {Math.round(item.main.temp - 273.15)} ℃,
                    {item.weather.main}
                    Wind - {item.wind.speed} meter per seconds
                </Typography>
            </div>
        )
    })

    const mapData = {
        center: [myLocation.latitude, myLocation.longitude],
        zoom: 8,
    };

    const coordinates = [
        [myLocation.latitude, myLocation.longitude]
    ];

    return (
        <div className={'container'}>
            <div>{weatherDay}</div>
            <div>
                <YMaps>
                    <Map defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}
