export default function (state = "Home", action) {
    switch (action.type) {
        case 'TODAY':
            return action.payload
        case 'TOMORROW':
            return action.payload
        case 'WEEK':
            return action.payload
        case 'HOME':
            return action.payload
        default:
            return state
    }
}
