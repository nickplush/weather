import axios from 'axios';
import KEYS from '../../config/apiKeys';

const weatherClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appId: KEYS.WEATHER,
    },
});

export default weatherClient;
