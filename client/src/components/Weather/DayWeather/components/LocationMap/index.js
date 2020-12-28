import { Map, YMaps } from 'react-yandex-maps';
import { Box } from '@material-ui/core';
import React from 'react';
import { object } from 'prop-types';
import PlaceMark from '../PlaceMark';

const LocationMap = ({ location, classes }) => {
    const config = (location) => ({ center: [location.latitude, location.longitude], zoom: 8 });
    return (
        <Box border={1}>
            <YMaps>
                <Map state={config(location)} className={classes.map}>
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
