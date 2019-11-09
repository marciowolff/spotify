import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../';

export default ({ initialStates } = {}) => {
  const enhancer = compose(
    applyMiddleware(thunk),
    logger()
  );

  return createStore(rootReducer, initialStates, enhancer);
};

const logger = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : x => x;
