import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import ActiveBooksReducer from './reducer_active_books';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBooksReducer,
    weather: WeatherReducer
});

export default rootReducer;