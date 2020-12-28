import { combineReducers } from 'redux';
import myLocationReducer from './cityReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
    myLocation: myLocationReducer,
    favorite: favoriteReducer,
});
