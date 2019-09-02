import { createStore } from 'redux';
import  weatherReducer from './reducers/weather-reducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

let reducer = combineReducers({
    form: formReducer,
    weatherReducer: weatherReducer

});

let store = createStore(reducer);

export default store;