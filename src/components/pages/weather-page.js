import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from './../../utils/compose';
// import Spinner from './../spinner/spinner';
import { weatherLoaded } from './../../actions/actions';
import withWeatherService from './../hoc/withWeatherService';

const WeaherPage = ({cityProps}) => {
    console.log(cityProps);
    return (
        <div className='weather-details'>
          <span className='name'></span>
          <span className='id'></span>
          <span className='timezone'></span>
        </div>
    );
};

class WeatherPageContainer extends Component {

    componentDidMount() {
        const { weatherService, weatherLoaded } = this.props;
        weatherService.getCity('London')
        .then((data) => weatherLoaded(data));
    }
    render() {
        const { city } = this.props;
        return <WeaherPage cityProps={city}/>

    }

}

const mapStateToProps = (state) => {
    return {
        city: state.city
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({weatherLoaded}, dispatch);
};


export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WeatherPageContainer);