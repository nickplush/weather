export const addFavorite = (arr) => dispatch =>{
    dispatch({type: "ADD_FAVORITE", payload: arr})
    localStorage.setItem('favorites', JSON.stringify(arr))
}
export const getFavorite = () => dispatch =>{
    const arr = JSON.parse(localStorage.getItem('favorites'))||[]
    dispatch({type: "GET_FAVORITE", payload: arr})
}
