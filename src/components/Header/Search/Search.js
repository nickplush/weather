import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import AlgoliaPlaces from 'algolia-places-react';

import { saveCityInfo } from '../../../actions/city';
import algoliaConfig from '../../../config/algolia';

const Search = () => {
    const dispatch = useDispatch();

    const onPlaceChange = useCallback(({ suggestion }) => {
        const { lat: latitude, lng: longitude } = suggestion.latlng;
        const coords = { latitude, longitude };
        dispatch(saveCityInfo(coords));
    }, []);

    return (
        <AlgoliaPlaces
            placeholder='Find city...'
            options={algoliaConfig}
            onChange={onPlaceChange}
        />
    );
};

export default Search;
