import {
  all,
  AllEffect,
  ForkEffect,
  takeLatest,
} from 'redux-saga/effects';

import { UsersTypes } from './users/types';
import { getAll } from './users/sagas';
import { AuthTypes } from './auth/types';
import {
  login,
  logout,
  refreshAccessToken,
  userExists,
} from './auth/sagas';

export default function* rootSaga(): Generator<AllEffect<ForkEffect<never>>, any, unknown> {
  return yield all([
    takeLatest(AuthTypes.AUTH_USER_EXISTS_REQUEST, userExists),
    takeLatest(AuthTypes.AUTH_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(AuthTypes.REFRESH_TOKEN_REQUEST, refreshAccessToken),
    takeLatest(UsersTypes.LOAD_REQUEST, getAll),
  ]);
}
