import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import searchTrails from './searchReducer';
// import favoriteTrails from './favoriteReducer';

const store = combineReducers({
  user,
  login,
  searchTrails,
  // favoriteTrails,
});

export default store;
