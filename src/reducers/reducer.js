const initialState = () => {
    return {
        city: [],
        loading: true,
        changeBackground: ''
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
        case 'CHANGE_BACKGROUND':
            return {
                changeBackground: action.payload,
                city: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;