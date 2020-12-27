import Storage, { KEYS } from '../helpers/localStorage';

export const ADD_FAVORITE = '[FAVORITES] add';
export const GET_FAVORITE = '[FAVORITES] get';

export const replaceFavorites = (favoriteCities) => {
    Storage.setItem(KEYS.FAVORITES, favoriteCities);
    return { type: ADD_FAVORITE, payload: favoriteCities };
};

export const getFavorites = () => {
    const favoriteCities = Storage.getItem(KEYS.FAVORITES) || [];
    return { type: GET_FAVORITE, payload: favoriteCities };
};
