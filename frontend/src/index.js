import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Router } from "react-router-dom";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import artistSlice from "./store/slices/artistSlice";

const rootReducer = combineReducers({
  artists: artistSlice.reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
