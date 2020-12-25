export default function (state = [], action) {
    switch (action.type) {
        case 'GET_FAVORITE':
            return action.payload
        case 'ADD_FAVORITE':
            return action.payload
        default:
            return state
    }
}
