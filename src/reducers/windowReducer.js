import * as actions from '../actions/changeWindow';

export default function (state = 'Home', action) {
    switch (action.type) {
    case actions.MEANTIME:
        return action.payload;
    default:
        return state;
    }
}
