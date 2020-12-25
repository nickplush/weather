import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import {useDispatch} from "react-redux";
import {saveCityInfo} from "../../../actions/getWeather";

export default () => {
    const dispatch = useDispatch()
    const saveCity = (city) => {
        console.log('LOOOG', city)
        const coords = {
            latitude: city.lat,
            longitude: city.lng
        }
        dispatch(saveCityInfo(coords))
    }

    return (
        <AlgoliaPlaces
            placeholder='Write an address here'

            options={{
                appId: 'plGXJ2ZDUD0D',
                apiKey: '529c898360f48ea935b00c3ab5ee2060',
                type: 'city',
            }}

            onChange={({query, rawAnswer, suggestion, suggestionIndex}) => {
                saveCity(suggestion.latlng)
            }}

        />
    );
}
