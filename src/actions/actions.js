const weatherLoaded = (city) => {
    return {
        type: 'WEATHER_LOADED',
        payload: city
    };
};

export {
    weatherLoaded
};