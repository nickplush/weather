export default function (state = null, action) {
    switch (action.type) {
        case 'CHANGE_CITY':
            return action.payload
        default:
            return state
    }
}
