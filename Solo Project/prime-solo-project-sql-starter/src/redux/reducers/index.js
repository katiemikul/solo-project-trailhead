import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import searchTrails from './searchReducer';

const store = combineReducers({
  user,
  login,
  searchTrails,
});

export default store;
