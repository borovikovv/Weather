import { createStore, applyMiddleware } from 'redux';
import  weatherReducer from './reducers/weather-reducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

let reducer = combineReducers({
    weatherReducer: weatherReducer,
    form: formReducer
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;