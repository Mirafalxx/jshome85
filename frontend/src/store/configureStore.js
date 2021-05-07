import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import artistsReducer from './reducers/artistsReducer';
import albumsReducer from './reducers/albumsReducer';
import tracksReducer from './reducers/tracksReducer';
import usersReducer, { initialState } from './reducers/usersReducer';
import trackHistoryReducer from './reducers/trackHistoryReducer';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import axiosApi from '../axiosApi';

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
  users: usersReducer,
  tracksHistory: trackHistoryReducer,
});
const persistedState = loadFromLocalStorage();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      ...initialState,
      user: store.getState().users.user,
    },
  });
});
axiosApi.interceptors.request.use((config) => {
  try {
    config.headers['Authorization'] = store.getState().users.user.token;
  } catch (e) {
    // do nothing, no token exists
  }
  return config;
});

axiosApi.interceptors.response.use(
  (res) => res,
  (e) => {
    if (!e.response) {
      e.response = { data: { global: 'No internet' } };
    }

    throw e;
  }
);

export default store;
