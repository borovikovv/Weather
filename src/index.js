import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/error-boundry';
import WeatherService from './services/weather-service';
import { WeatherContextProvider } from './components//weather-service-context/weather-service-contex';
import store from './store';

const weatherService = new WeatherService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <WeatherContextProvider value={weatherService}>
                <Router>
                    <App />
                </Router>
            </WeatherContextProvider>
        </ErrorBoundry>
    </Provider> , document.getElementById('root'));

