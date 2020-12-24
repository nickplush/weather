export const switchOnToday = () => async dispatch => {
    dispatch({ type: 'TODAY', payload: 'Today' })
}
export const switchOnTomorrow = () => async dispatch => {
    dispatch({ type: 'TOMORROW', payload: 'Tomorrow' })
}
export const switchOnWeek = () => async dispatch => {
    dispatch({ type: 'WEEK', payload: 'Week' })
}
export const switchOnHome = () => async dispatch => {
    dispatch({ type: 'HOME', payload: 'Home' })
}
