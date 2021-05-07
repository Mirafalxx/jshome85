import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import App from './App';
import history from './history';
import store from './store/configureStore';

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
