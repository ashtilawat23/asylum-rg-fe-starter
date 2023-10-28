import { combineReducers } from 'redux';
import vizReducer from './vizReducer';
import persistReducer from './persistReducer';

export default combineReducers({
  vizReducer,
  persistReducer,
});
