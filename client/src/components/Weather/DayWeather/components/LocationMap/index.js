import { Map, YMaps } from 'react-yandex-maps';
import { Box } from '@material-ui/core';
import React from 'react';
import { object } from 'prop-types';
import PlaceMark from '../PlaceMark';
import { mapConfig } from './helpers';

const LocationMap = ({ location, classes }) => {
    return (
        <Box border={1}>
            <YMaps>
                <Map state={mapConfig(location)} className={classes.map}>
                    <PlaceMark location={location}/>
                </Map>
            </YMaps>
        </Box>
    );
};

LocationMap.propTypes = {
    location: object,
    classes: object,
};

export default LocationMap;
