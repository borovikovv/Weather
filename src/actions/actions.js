const weatherLoaded = (city) => {
    return {
        type: 'WEATHER_LOADED',
        payload: city
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
    changeBackground
};