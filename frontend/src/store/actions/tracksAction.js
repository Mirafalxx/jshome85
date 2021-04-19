import axiosApi from '../../axiosApi';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const fetchTracksRequest = () => ({ type: FETCH_TRACKS_REQUEST });
export const fetchTracksSuccess = (tracks) => ({ type: FETCH_TRACKS_SUCCESS, tracks });
export const fetchTracksFailure = () => ({ type: FETCH_TRACKS_FAILURE });

export const fetchTracks = (trackID) => {
  return async (dispatch) => {
    try {
      dispatch(fetchTracksRequest());
      const response = await axiosApi.get(`/tracks/?album=${trackID}`);
      dispatch(fetchTracksSuccess(response.data));
    } catch (e) {
      dispatch(fetchTracksFailure());
    }
  };
};
