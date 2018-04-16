import {FETCH_WEATHER} from "../actions/index";

const WeatherReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        default:
            return state;
    }
};

export default WeatherReducer;