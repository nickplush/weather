export const prepareFavorite = (weather, location) => ({
    city: weather.name + ',' + weather.sys.country,
    coords: {
        latitude: location.latitude,
        longitude: location.longitude,
    },
});

export const isCoordsTheSame = (coords, location) => {
    return JSON.stringify(location.coords) === JSON.stringify(coords);
};
