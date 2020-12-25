import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from "@material-ui/core";
import Search from "./Search/Search";
import Navigator from "./Navigator/Navigator";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tollColor: {
        background: "white",
        display: "flex",
        justifyContent: "space-between"
    },
}));

export const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box position="static">
                <Toolbar className={classes.tollColor}>
                    <Navigator/>
                    <div>
                        <Search/>
                    </div>
                </Toolbar>
            </Box>
        </div>
    );
}
