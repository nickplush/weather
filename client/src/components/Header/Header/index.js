import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { Box } from '@material-ui/core';

import Search from '../Search/Search';
import Navigator from '../Navigator/Navigator';

import classes from './style.module.css';

const Header = () => (
    <div className={classes.root}>
        <Box position="static">
            <Toolbar className={classes.toolbar}>
                <Navigator/>
                <Search/>
            </Toolbar>
        </Box>
    </div>
);
export default Header;
