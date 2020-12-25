import React, {useEffect, useState} from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {getWeekWeather} from "../../actions/getWeather";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "max",
        display: "flex"
    },
    card: {
        height: theme.spacing(15),
        width: theme.spacing(15),
        margin: 20,
        padding: 10
    }
}));


export const WeekWeather = () => {
    const WEEKDAYS = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday' ];
    const classes = useStyles()
    const myLocation = useSelector((state) => state.myLocation)
    const [week, setWeek] = useState([])
    const [time, setTime] = useState(0)

    const fetchWeekWeather = async () => {
        const newWeek = await getWeekWeather(myLocation)
        setWeek(newWeek.daily)
        setTime(newWeek.timezone_offset)
    }

    const weatherDay = week.map(item => {
        const date = (item.dt - time)*1000
        return (
            <Box border={1} className={classes.card}>
                <Typography component={'div'}>{WEEKDAYS[new Date(date).getDay()]}</Typography>
                <Typography component={'div'}>{Math.round(item.temp.day - 273.15)} ℃</Typography>
                <Typography component={'div'}>{item.weather[0].main}</Typography>
            </Box>
        )
    })

    useEffect(() => fetchWeekWeather(),[myLocation])

    return (<div className={classes.root}>{weatherDay}</div>)

}
