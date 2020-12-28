import * as actions from '../actions/favoriteActions';

export default function (state = [], action) {
    switch (action.type) {
    case actions.GET_FAVORITE:
        return action.payload;
    case actions.ADD_FAVORITE:
        return action.payload;
    default:
        return state;
    }
}
