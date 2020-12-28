export const getMapData = (location) => ({ center: [location.latitude, location.longitude], zoom: 8 });

export const getCoords = (location) => [
    [location.latitude, location.longitude],
];
