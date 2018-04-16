import React, { Component } from 'react';
import {connect} from 'react-redux';
import Charts from '../components/charts';
import {fetchWeather    } from '../actions/index';
import {bindActionCreators} from 'redux';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather (cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map((weather) => {
            return weather.main.temp;
        });
        const pressures = cityData.list.map((weather) => {
            return weather.main.pressure;
        });
        const humidities = cityData.list.map((weather) => {
            return weather.main.humidity;
        });
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        console.log(temps);
        return (
            <tr key={cityName}>
                <td>{cityName}<br/><GoogleMap lon={lon} lat={lat}/></td>
                <td><Charts data={temps} color={'red'} /></td>
                <td><Charts data={pressures} color={'green'} /></td>
                <td><Charts data={humidities} color={'blue'} /></td>
            </tr>
        )

    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}

                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    };
};
//
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({weather: fetchWeather}, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
export default connect(mapStateToProps)(WeatherList);