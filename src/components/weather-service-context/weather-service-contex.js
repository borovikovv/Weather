import React from 'react';

const{
    Provider: WeatherContextProvider,
    Consumer: WeatherContextConsumer
} = React.createContext();

export {
    WeatherContextProvider,
    WeatherContextConsumer
};