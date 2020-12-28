import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { getCoords, getMapData } from './helpers';
import { Box } from '@material-ui/core';
import React from 'react';
import { object } from 'prop-types';

const renderPlaceMarks = (location) => getCoords(location).map(coordinate => <Placemark key={Math.random()} geometry={coordinate}/>);

const LocationMap = ({ location, classes }) => (
    <Box border={1}>
        <YMaps>
            <Map defaultState={getMapData(location)} className={classes.map}>
                {renderPlaceMarks(location)}
            </Map>
        </YMaps>
    </Box>
);

LocationMap.propTypes = {
    location: object,
    classes: object,
};

export default LocationMap;
