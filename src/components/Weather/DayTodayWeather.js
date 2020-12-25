import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getDayWeather} from "../../actions/getWeather";
import {Box, Typography} from "@material-ui/core";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "max",
        display: "flex"
    },
    card: {
        width: theme.spacing(50),
        background: '#DCDCDC',
        borderRadius: 10,
        padding: 10
    },
    day: {
        display: "flex",
        justifyContent: "start",
        padding: 5
    },
    map: {
        width: theme.spacing(100),
        height: theme.spacing(50),
    },
    time: {
        width: theme.spacing(8)
    },
    container: {
        marginRight: 50
    }
}));

export const DayTodayWeather = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    const classes = useStyles()
    const myLocation = useSelector((state) => state.myLocation)
    const [data, setData] = useState([])

    const fetchDayWeather = async () => {
        const newDay = await getDayWeather(myLocation)
        setData(newDay)
    }
    useEffect(() => fetchDayWeather(), [myLocation])
    const weatherDay = data.map(item => {
        return (
            <div className={classes.day}>
                <Typography className={classes.time}>
                    {new Date(item.dt * 1000).getHours()}:{new Date(item.dt).getMinutes()}
                </Typography>
                <Typography>
                    {Math.round(item.main.temp - 273.15)} ℃,
                </Typography>
                <Typography>
                    {item.weather.main}
                </Typography>
                <Typography>
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
            <div className={classes.container}>
                <Typography variant={'h3'}>Today</Typography>
                <Typography variant={'h5'}>{monthNames[new Date().getMonth()]},{new Date().getDate()} </Typography>
                <div className={"title_container"}>
                    <div className={classes.time}>Time</div>
                    <div>Weather</div>
                </div>
                {weatherDay}
            </div>
            <div>
                <Box border={1}>
                    <YMaps>
                        <Map defaultState={mapData} className={classes.map}>
                            {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                        </Map>
                    </YMaps>
                </Box>
            </div>
        </div>
    )
}
