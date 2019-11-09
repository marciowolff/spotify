import spotify, { initialState } from './index';
import deepFreeze from 'deep-freeze';

import { SPOTIFY_ALBUM, SPOTIFY_LIST } from './actions';

it('Should spotify be a function', () => {
  expect(typeof spotify).toBe('function');
});

it('Should request SPOTIFY_ALBUM', () => {
  const before = deepFreeze({});
  const action = deepFreeze({
    type: SPOTIFY_ALBUM,
    payload: { items: {} },
  });
  const after = {
    album: { items: {} },
  };

  expect(spotify(before, action)).toEqual(after);
});

it('Should request SPOTIFY_LIST', () => {
  const before = deepFreeze({});
  const action = deepFreeze({
    type: SPOTIFY_LIST,
    payload: [{ items: [] }, { items: [] }],
  });
  const after = {
    list: [{ items: [] }, { items: [] }],
  };

  expect(spotify(before, action)).toEqual(after);
});
