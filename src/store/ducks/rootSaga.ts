import {
  all,
  AllEffect,
  ForkEffect,
  takeLatest,
} from 'redux-saga/effects';

import { UsersTypes } from './users/types';
import { getAll } from './users/sagas';
import { AuthTypes } from './auth/login/types';
import { userExists } from './auth/login/sagas';

export default function* rootSaga() : Generator<AllEffect<ForkEffect<never>>, any, unknown> {
  return yield all([
    takeLatest(AuthTypes.AUTH_USER_EXISTS_REQUEST, userExists),
    takeLatest(UsersTypes.LOAD_REQUEST, getAll),
  ]);
}
