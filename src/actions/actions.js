const weatherLoaded = (city) => {
    return {
        type: 'WEATHER_LOADED',
        payload: city
    };
};
const weatherRequested = () => {
    return {
        type: 'WEATHER_REQUSTED'
    };
};

export {
    weatherLoaded,
    weatherRequested
};