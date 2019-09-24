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
const changeCity = (city) => {
    return {
        type: 'CHANGE_CITY',
        payload: city
    };
};

export {
    weatherLoaded,
    weatherRequested,
    changeCity
};