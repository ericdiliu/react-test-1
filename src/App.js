import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';
import SearchBar from './containers/weather-search-bar';
import WeatherList from './containers/weather-list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="col-md-12">
          <div><BookList/></div>
          <div><BookDetail/></div>
        </div>
          <div className="col-md-12"><SearchBar/></div>
        <div className="col-md-12"><WeatherList/></div>
      </div>
        </Provider>
    );
  }
}

export default App;
