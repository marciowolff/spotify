export const SPOTIFY_LIST = 'spotify:SPOTIFY_LIST';
export const SPOTIFY_ALBUM = 'spotify:SPOTIFY_ALBUM';

const setList = (albums = []) => dispatch => {
  dispatch({
    type: SPOTIFY_LIST,
    payload: albums,
  });
};

const setAlbum = (content = {}) => dispatch => {
  dispatch({
    type: SPOTIFY_ALBUM,
    payload: content,
  });
};

export default {
  setList,
  setAlbum,
};
