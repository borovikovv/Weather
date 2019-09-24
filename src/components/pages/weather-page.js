import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import compose from './../../utils/compose';
import Spinner from './../spinner/spinner';
import { weatherLoaded, weatherRequested, changeCity } from './../../actions/actions';
import withWeatherService from './../hoc/withWeatherService';
import './weather-page.css';
import FindReduxForm from './../form/form';

const WeaherPage = ({cityProps = {}}) => {
    const {name, celsius, wind, description} = cityProps;

    console.log(cityProps);
    return (
        <div className='weather-details'>
          <span className='name'>{name}</span>
          <span className='celsius'>temp: { celsius }{String.fromCharCode(176) }C </span>
          <span className='wind'> wind: {wind} m.s.</span>
          <span className='description'>{description}</span>
        </div>
    );
};


class WeatherPageContainer extends Component {

    updateWeatherData(newCity) {
        const { weatherService,
            weatherLoaded,
            weatherRequested
        } = this.props;
        weatherRequested();
        weatherService.getCity(newCity)
        .then((data) => weatherLoaded(data))
        .catch((error) => new Error(error));
    }

    componentDidMount() {
        this.updateWeatherData();
    }

    onSubmit = (value) => {
        console.log(value.cityName);
        this.updateWeatherData(value.cityName);
    };

    render() {
        const { city, loading } = this.props;
        if(loading) {
            return <Spinner />
        }
        return (
            <Fragment>
                <WeaherPage cityProps={city}/>
                <h1 className="form-header"> Find city : </h1>
                <FindReduxForm onSubmit={this.onSubmit} />
            </Fragment>
        );
    }

}


const mapStateToProps = ({weatherReducer: {city, loading}}) => {
    return { 
        city,
        loading};
};

const mapDispatchToProps = {
    weatherRequested,
    weatherLoaded,
    changeCity
};


export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WeatherPageContainer);