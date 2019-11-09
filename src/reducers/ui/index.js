import createReducer from '../create-reducer';
import { ALERT_MESSAGE, LOADING } from './actions';

export const initialState = {
  alertMessage: '',
  loading: true,
};

const ui = createReducer(initialState, {
  [ALERT_MESSAGE]: (state, action) => ({
    ...state,
    alertMessage: action.payload.message,
  }),
  [LOADING]: (state, action) => ({
    ...state,
    loading: action.payload.loading,
  }),
});

export default ui;
