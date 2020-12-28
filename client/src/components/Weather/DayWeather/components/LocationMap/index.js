import { Map, YMaps } from 'react-yandex-maps';
import { getMapData } from './helpers';
import { Box } from '@material-ui/core';
import React from 'react';
import { object } from 'prop-types';
import PlaceMark from '../PlaceMark';

const LocationMap = ({ location, classes }) => (
    <Box border={1}>
        <YMaps>
            <Map defaultState={getMapData(location)} className={classes.map}>
                <PlaceMark location={location}/>
            </Map>
        </YMaps>
    </Box>
);

LocationMap.propTypes = {
    location: object,
    classes: object,
};

export default LocationMap;
