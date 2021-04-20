import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import artistsReducer from './store/reducers/artistsReducer';
import albumsReducer from './store/reducers/albumsReducer';
import tracksReducer from './store/reducers/tracksReducer';
import usersReducer from './store/reducers/usersReducer';
import App from './App';
import history from './history';

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
  },
});

const app = (
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
