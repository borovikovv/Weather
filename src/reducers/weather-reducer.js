
const WeatherReducer = (state = {}, action) => {
    switch(action.type){
        case 'WEATHER_REQUSTED':
            return{
                loading: true
            };
        case 'WEATHER_LOADED':
            return{
                city: action.payload,
                loading: false
            };
        case 'CHANGE_CITY':
            let newCity = action.payload;
            return Object.assign({}, state, {
                city: newCity
            });
        default:
            return state;
    }
};

export default WeatherReducer;