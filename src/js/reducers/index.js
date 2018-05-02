import { combineReducers } from 'redux';
import layout from './layout';
import app from './app';

export default combineReducers({
  app,
  layout,
});
