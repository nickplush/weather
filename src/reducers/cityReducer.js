import * as actions from '../actions/city';

export default function (state = null, action) {
    switch (action.type) {
    case actions.CHANGE_CITY:
        return action.payload;
    default:
        return state;
    }
}
