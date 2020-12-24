import axios from "axios";
const key = '5dd71aff0b74d44817be6ac1785e9b46'

export const getWeather = async (sear) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${sear.latitude}&lon=${sear.longitude}&appid=${key}`
    return ((await axios.get(url)).data)
}

export const getCityInfo = async (sear) => {
    const url = `https://openweathermap.org/data/2.5/find?q=${sear}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
    return ((await axios.get(url)).data)
}
export const getWeekWeather = async (sear) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${sear.latitude}&lon=${sear.longitude}&exclude=current,minutely,hourly,alerts&appid=${key}`
    const res = (await axios.get(url)).data
    return res
}

export const getDayWeather = async (sear) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${sear.latitude}&lon=${sear.longitude}&appid=${key}`
    const res = (await axios.get(url)).data
    const filter = res.list.filter((item)=>new Date(item.dt*1000).getDay()===new Date().getDay()+1)
    return filter
}

export const getTomorrowWeather = async (sear) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${sear.latitude}&lon=${sear.longitude}&appid=${key}`
    const res = (await axios.get(url)).data
    const filter = res.list.filter((item)=>new Date(item.dt*1000).getDay()===new Date().getDay()+1)
    return filter
}

export const saveCityInfo = (search) => dispatch => {
    dispatch({type: "CHANGE_CITY", payload: search})
}
