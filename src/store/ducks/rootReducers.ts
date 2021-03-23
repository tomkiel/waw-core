import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import global from './global';
import auth from './auth';
import users from './users';

export default (history: History<any>): any => combineReducers({
  router: connectRouter(history),
  global,
  auth,
  users,
});
