const getDateTime = (weatherItem) => {
    const date = new Date(weatherItem.dt * 1000);
    const hours = date.getHours();
    return `${hours}:00`;
};

const getTemperature = (weatherItem) => {
    const { temp: kelvinTemp } = weatherItem.main;
    const celsiusTemp = Math.round(kelvinTemp - 273.15);
    return `${celsiusTemp} ℃`;
};

const getWeatherType = (weatherItem) => weatherItem.weather[0].main;

const getWindSpeed = (weatherItem) => {
    const { speed } = weatherItem.wind;
    return `Wind - ${speed} per second`;
};

const getWeatherCity = (weatherItem) => `${weatherItem.name}, ${weatherItem.sys.country}`;

export const getWeatherInfo = (weatherItem) => {
    const dateTime = getDateTime(weatherItem);
    const temperature = getTemperature(weatherItem);
    const weatherType = getWeatherType(weatherItem);
    const windSpeed = getWindSpeed(weatherItem);
    const city = getWeatherCity(weatherItem);
    return {
        dateTime,
        temperature,
        weatherType,
        windSpeed,
        city,
    };
};
