import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import deepFreeze from 'deep-freeze';
import { ALERT_MESSAGE, LOADING, alertMessage, setLoading } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;

beforeEach(() => {
  store = mockStore({ ui: [] });
});

describe('alertMessage (ALERT_MESSAGE)', () => {
  it('Should default dispatch', () => {
    store.dispatch(alertMessage());

    const expectedActions = deepFreeze([
      {
        type: ALERT_MESSAGE,
        payload: {
          message: '',
        },
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should content dispatch', () => {
    store.dispatch(alertMessage('texto'));

    const expectedActions = deepFreeze([
      {
        type: ALERT_MESSAGE,
        payload: {
          message: 'texto',
        },
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('setLoading (LOADING)', () => {
  it('Should default dispatch', () => {
    store.dispatch(setLoading());

    const expectedActions = deepFreeze([
      {
        type: LOADING,
        payload: {
          loading: false,
        },
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should content dispatch', () => {
    store.dispatch(setLoading(true));

    const expectedActions = deepFreeze([
      {
        type: LOADING,
        payload: {
          loading: true,
        },
      },
    ]);

    expect(store.getActions()).toEqual(expectedActions);
  });
});
