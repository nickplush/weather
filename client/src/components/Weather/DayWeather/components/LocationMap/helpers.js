export const getCoords = (location) => [
    [location.latitude, location.longitude],
];

export const mapConfig = (location) => ({ center: [location.latitude, location.longitude], zoom: 8 });