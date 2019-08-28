import React from 'react';
import { WeatherContextConsumer } from './../weather-service-context/weather-service-contex';

const withWeatherService = () => (Wrapped) => {
    return (props) => {
        return (
           <WeatherContextConsumer>
               {
                   (weatherService) => {
                       return(
                           <Wrapped {...props} weatherService={weatherService} />
                       )
                   }
               }
           </WeatherContextConsumer> 
        )
    }
}

export default withWeatherService;