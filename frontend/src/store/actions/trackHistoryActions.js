import axiosApi from '../../axiosApi';
export const FETCH_TRACK_HISTORY_REQUEST = 'FETCH_TRACK_HISTORY_REQUEST';
export const FETCH_TRACK_HISTORY_SUCCESS = 'FETCH_TRACK_HISTORY_SUCCESS ';
export const FETCH_TRACK_HISTORY_FAILURE = 'FETCH_TRACK_HISTORY_FAILURE ';

export const ADD_TRACK_HISTORY_SUCCESS = 'ADD_TRACK_HISTORY_SUCCESS';

export const fetchTrackHistoryRequest = () => ({ type: FETCH_TRACK_HISTORY_REQUEST });
export const fetchTrackHistorySuccess = (trackHistory) => ({ type: FETCH_TRACK_HISTORY_SUCCESS, trackHistory });
export const fetchTrackHistoryFailure = () => ({ type: FETCH_TRACK_HISTORY_FAILURE });
export const AddTrackHistorySuccess = () => ({ type: ADD_TRACK_HISTORY_SUCCESS });

export const fetchTrackHistory = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTrackHistoryRequest());
      const response = await axiosApi.get('/track_history');
      dispatch(fetchTrackHistorySuccess(response.data));
    } catch (e) {
      dispatch(fetchTrackHistoryFailure());
      console.log('Could`t fetch Track History');
    }
  };
};

export const addTrackHistory = (trackHistoryData) => {
  return async (dispatch) => {
    await axiosApi.post('/track_history', trackHistoryData);
    dispatch(AddTrackHistorySuccess);
  };
};
