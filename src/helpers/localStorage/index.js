import Logger, { ERRORS } from '../../logger';
import { KEYS } from './constants';

const setItem = (key, data) => {
    try {
        const preparedData = JSON.stringify(data);
        localStorage.setItem(key, preparedData);
    } catch (e) {
        Logger.error({ name: ERRORS.JS_ERROR, data: e });
    }
};

const getItem = (key) => {
    let preparedData;
    try {
        const data = localStorage.getItem(key);
        preparedData = JSON.parse(data);
    } catch (e) {
        Logger.error({ name: ERRORS.JS_ERROR, data: e });
    }
    return preparedData;
};

export { KEYS };

export default {
    setItem,
    getItem,
};
