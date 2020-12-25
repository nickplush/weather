import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getWeather} from "../../actions/getWeather";
import {useDispatch, useSelector} from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import {addFavorite} from "../../actions/favoriteActions";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "max",
        display: "flex",
        justifyContent: "center",
        alignContent: "start",
        background: "black",
        marginTop: theme.spacing(3),
        color: "white"
    },
    card: {
        height: theme.spacing(30),
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center'
    }
}));


export const MainWeatherWindow = () => {
    const dispatch = useDispatch()
    const myLocation = useSelector((state) => state.myLocation)
    const [weather, setWeather] = useState('')
    const arr = useSelector(state => state.favorite)

    const getWeatherOfMyLocation = async () => {
        if (myLocation) {
            const newWeather = await getWeather(myLocation)
            setWeather(newWeather)
        }
    }
    useEffect(() => getWeatherOfMyLocation(), [myLocation])

    const saveCity = () => {
        console.log('LOOOG', myLocation)
        const fav = {
            city: weather.name + ',' + weather.sys.country,
            coords: {
                latitude: myLocation.latitude,
                longitude: myLocation.longitude
            }
        }
        const newArr = [...arr, fav]
        dispatch(addFavorite(newArr))
    }


    const classes = useStyles()
    if (weather) {
        const celsius = Math.round(weather.main.temp - 273.15)
        return (
            <div>
                <div className={classes.root}>
                    <div className={classes.card}>
                        <Typography variant={"h3"}>{celsius} ℃</Typography>
                        <Typography
                            variant={"h4"}>{weather.name}, {weather.sys.country}</Typography>
                        <Typography variant={"h6"}>
                            {weather.weather[0].main}, Wind
                            - {weather.wind.speed} meter per second
                        </Typography>
                        {Boolean(!arr.filter(item => JSON.stringify(item.coords) === JSON.stringify(myLocation)).length) &&
                        <AddIcon onClick={saveCity}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Typography variant={"h3"}>Geolocation unspecified</Typography>
    )

}
