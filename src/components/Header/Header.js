import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {fade, makeStyles} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {getCityInfo, saveCityInfo} from "../../actions/getWeather";
import {BottomNavigation, BottomNavigationAction, TextField} from "@material-ui/core";
import {switchOnToday, switchOnTomorrow, switchOnWeek, switchOnHome} from "../../actions/changeWindow";
import {Autocomplete} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    tollColor: {
        background: "black",
        display: "flex",
        justifyContent: "space-between"
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: theme.spacing(30),
        color: "white"
    },
    nav: {
        background: "black"
    },
    buttonNav: {
        color: "white"
    }
}));

export const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [search, setSearch] = useState([])
    const [value, setValue] = useState(0)

    const handlePressEnter = async (e) => {
        if (e.charCode === 13) {
            console.log('LOOOG', 'aaaaaa')
            const variants = await getCityInfo(e.target.value)
            console.log('LOOOG', variants)
            setSearch(variants.list)
        }
    }

    const todayWindow = () => {
        dispatch(switchOnToday())
    }
    const tomorrowWindow = () => {
        dispatch(switchOnTomorrow())
    }
    const weekWindow = () => {
        dispatch(switchOnWeek())
    }
    const homeWindow = () => {
        dispatch(switchOnHome())
    }

    const saveCity = (city) => {
        const coords = {
            latitude: city.coord.lat,
            longitude: city.coord.lon
        }
        dispatch(saveCityInfo(coords))
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.tollColor}>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.nav}
                    >
                        <BottomNavigationAction label="Home" onClick={homeWindow} className={classes.buttonNav}/>
                        <BottomNavigationAction label="Today" onClick={todayWindow} className={classes.buttonNav}/>
                        <BottomNavigationAction label="Tomorrow" onClick={tomorrowWindow}
                                                className={classes.buttonNav}/>
                        <BottomNavigationAction label="Week" onClick={weekWindow} className={classes.buttonNav}/>
                    </BottomNavigation>
                    <div className={classes.search}>
                        <Autocomplete
                            onKeyPress={handlePressEnter}
                            id="combo-box-demo"
                            options={search}
                            onChange = {(event,value) => {
                                if(value){
                                    saveCity(value)
                                }
                            }}
                            getOptionLabel={(option) => option.name + ',' + option.sys.country}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
