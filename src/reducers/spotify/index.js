import createReducer from '../create-reducer';

import { SPOTIFY_LIST, SPOTIFY_ALBUM } from './actions';

export const initialState = {};

const spotify = createReducer(initialState, {
  [SPOTIFY_LIST]: (state, action) => ({
    ...state,
    list: action.payload,
  }),
  [SPOTIFY_ALBUM]: (state, action) => ({
    ...state,
    album: action.payload,
  }),
});

export default spotify;
