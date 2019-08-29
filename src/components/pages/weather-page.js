import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from './../../utils/compose';
import Spinner from './../spinner/spinner';
import { weatherLoaded, weatherRequested, changeBackground } from './../../actions/actions';
import withWeatherService from './../hoc/withWeatherService';
import './weather-page.css';

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
const setCity = 'Portland';

class WeatherPageContainer extends Component {

    componentDidMount() {
        const { weatherService,
                weatherLoaded,
                 weatherRequested } = this.props;
        weatherRequested();
        weatherService.getCity(setCity)
        .then((data) => weatherLoaded(data));
    }
    render() {
        const { city, loading } = this.props;
        if(loading) {
            return <Spinner />
        }
        return <WeaherPage cityProps={city}/>
    }

}


const mapStateToProps = ({city, loading}) => {
    return { city, loading};
};

const mapDispatchToProps = {
    weatherRequested,
    weatherLoaded
};


export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WeatherPageContainer);