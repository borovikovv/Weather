const initialState = () => {
    return {
        city: []
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'WEATHER_LOADED':
            return{
                city: action.payload
            };
        default:
            return state;
    }
};

export default reducer;