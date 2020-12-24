import { combineReducers } from 'redux'
import myLocationReducer from "./cityReducer";
import windowReducer from "./windowReducer";

export default combineReducers({
    window: windowReducer,
    myLocation: myLocationReducer,
})
