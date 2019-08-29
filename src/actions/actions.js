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
const changeBackground = (newBg) => {
    return {
        type: 'CHANGE_BACKGROUND',
        payload: newBg
    };
};

export {
    weatherLoaded,
    weatherRequested,
    changeBackground
};