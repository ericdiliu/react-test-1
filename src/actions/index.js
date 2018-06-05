import axios from 'axios';

const selectBook = (book) => {
    console.log(`Book selected: ${book.title}`);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};

export { selectBook };

export const FETCH_WEATHER = "FETCH_WEATHER";

const API_KEY = "00544fb04d5064510bbed67f1988f1f2";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

const fetchWeather = (city) => {
    const URL = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(URL);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export {fetchWeather}