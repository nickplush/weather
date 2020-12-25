import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {saveCityInfo} from "../../actions/getWeather";
import {useDispatch, useSelector} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "max",
        display: "flex"
    },
    card: {
        height: theme.spacing(15),
        width: theme.spacing(15),
        background: '#DCDCDC',
        margin: 20,
        borderRadius: 10,
        padding: 10
    }
}));


export const Home = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const arr = useSelector(state=>state.favorite)

    const favorites = arr.map(item => {
        return (
            <div key={Math.random()} className={classes.card}
                 onClick={()=>{dispatch(saveCityInfo(item.coords)) }}>
                <Typography component={'div'} >{item.city}</Typography>
            </div>
        )
    })

    return (<div className={classes.root}>{favorites}</div>)

}
