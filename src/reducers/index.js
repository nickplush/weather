import { combineReducers } from 'redux';
import myLocationReducer from './cityReducer';
import windowReducer from './windowReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
    window: windowReducer,
    myLocation: myLocationReducer,
    favorite: favoriteReducer,
});
