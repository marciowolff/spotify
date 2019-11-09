import ui, { initialState } from './index';
import deepFreeze from 'deep-freeze';

import { ALERT_MESSAGE, LOADING } from './actions';

it('Should UI be a function', () => {
  expect(typeof ui).toBe('function');
});

it('Should request ALERT_MESSAGE', () => {
  const before = deepFreeze({});
  const action = deepFreeze({
    type: ALERT_MESSAGE,
    payload: {
      message: 'texto',
    },
  });
  const after = { alertMessage: 'texto' };

  expect(ui(before, action)).toEqual(after);
});

it('Should request LOADING', () => {
  const before = deepFreeze({});
  const action = deepFreeze({
    type: LOADING,
    payload: {
      loading: true,
    },
  });
  const after = { loading: true };

  expect(ui(before, action)).toEqual(after);
});

it('Should return the lastest state when action is unknown', () => {
  const before = deepFreeze(initialState);
  const action = deepFreeze({ type: 'UNKNOWN' });
  const after = deepFreeze(initialState);

  expect(ui(before, action)).toEqual(after);
});

it('Should return initialState when state before is undefined', () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;

  expect(ui(before, action)).toEqual(after);
});
