import { combineReducers } from 'redux';
import auth from './auth/login';
import users from './users';

export default combineReducers({
  auth,
  users,
});
