import { combineReducers } from 'redux';
import ui from './ui';
import spotify from './spotify';

export default combineReducers({
  ui,
  spotify,
});
