import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import deepFreeze from 'deep-freeze';
import action, { SPOTIFY_ALBUM, SPOTIFY_LIST } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('./index.js');

let store;

beforeEach(() => {
  process.env.BACKEND_API = '';
  store = mockStore({ spotify: {} });
});

it('should be a object', () => {
  expect(typeof action).toBe('object');
});

describe('setAlbum (SPOTIFY_ALBUM)', () => {
  it('should be a object with setAlbum', () => {
    expect(typeof action.setAlbum).toBeTruthy();
  });

  it('Should default dispatch', () => {
    store.dispatch(action.setAlbum());

    const expectedActions = deepFreeze([
      {
        type: SPOTIFY_ALBUM,
        payload: {},
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should content dispatch', () => {
    store.dispatch(action.setAlbum({ items: [] }));

    const expectedActions = deepFreeze([
      {
        type: SPOTIFY_ALBUM,
        payload: { items: [] },
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('setList (SPOTIFY_LIST)', () => {
  it('should be a object with setList', () => {
    expect(typeof action.setList).toBeTruthy();
  });

  it('Should default dispatch', () => {
    store.dispatch(action.setList());

    const expectedActions = deepFreeze([
      {
        type: SPOTIFY_LIST,
        payload: [],
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should content dispatch', () => {
    store.dispatch(action.setList([{ items: [] }, { items: [] }]));

    const expectedActions = deepFreeze([
      {
        type: SPOTIFY_LIST,
        payload: [{ items: [] }, { items: [] }],
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });
});
