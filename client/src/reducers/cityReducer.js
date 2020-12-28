import * as actions from '../actions/city';

export default function (state = { latitude: 0, longitude: 0 }, action) {
    switch (action.type) {
    case actions.CHANGE_CITY:
        return action.payload;
    default:
        return state;
    }
}
