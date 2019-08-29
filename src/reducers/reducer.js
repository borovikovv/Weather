const initialState = () => {
    return {
        city: [],
        loading: true,
        changeBackground: null
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'WEATHER_REQUSTED':
            return{
                city: [],
                loading: true
            }
        case 'WEATHER_LOADED':
            return{
                city: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;