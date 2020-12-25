export const addFavorite = (arr) => dispatch =>{
    console.log('LOOOG', arr)
    dispatch({type: "ADD_FAVORITE", payload: arr})
    localStorage.setItem('favorites', JSON.stringify(arr))
}
export const getFavorite = () => dispatch =>{
    const arr = JSON.parse(localStorage.getItem('favorites'))||[]
    console.log('mmm', arr )
    dispatch({type: "GET_FAVORITE", payload: arr})
}
