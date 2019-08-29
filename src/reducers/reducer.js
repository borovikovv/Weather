const initialState = () => {
    return {
        city: {},
        loading: true,
        changeBackground: ''
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'WEATHER_LOADED':
            return{
                city: action.payload,
                loading: false
            };
        case 'CHANGE_BACKGROUND':
            return {
                changeBackground: action.payload
            };
        default:
            return state;
    }
};

export default reducer;