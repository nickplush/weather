import React from "react";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {saveCityInfo} from "../../actions/getWeather";
import {useDispatch, useSelector} from "react-redux";


const useStyles = makeStyles((theme) => ({
    card: {
        display:"flex",
        justifyContent:"center",
        margin: 20,
        height: 140,
    }
}));


export const Home = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const arr = useSelector(state=>state.favorite)

    const favorites = arr.map(item => {
        return (
            <Grid item xs={2} >
                <Box border={1} className={classes.card} onClick={()=>{dispatch(saveCityInfo(item.coords)) }}>
                    <Typography component={'div'} >{item.city}</Typography>
                </Box>
            </Grid>
        )
    })

    return (
        <Grid container spacing={12}>
            {favorites}
        </Grid>
    )

}
