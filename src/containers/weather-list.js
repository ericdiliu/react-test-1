import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchWeather    } from '../actions/index';
import {bindActionCreators} from 'redux';

class WeatherList extends Component {
    renderWeather (cityData) {
        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
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