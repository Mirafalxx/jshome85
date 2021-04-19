import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { BrowserRouter, Router } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import artistsReducer from './store/reducers/artistsReducer';
import albumsReducer from './store/reducers/albumsReducer';
import tracksReducer from './store/reducers/tracksReducer';

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
