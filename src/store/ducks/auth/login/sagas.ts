import {
  call,
  CallEffect,
  put,
  PutEffect,
} from 'redux-saga/effects';
import api from '../../../../services/api';

import {
  AuthFailure,
  AuthLogout,
  AuthSuccess,
  AuthUserExists,
  AuthUserExistsFailure,
  AuthViewPasswordInput,
  IAuth,
} from './types';

import {
  authFailure,
  authLogout,
  authSuccess,
  authUserExists,
  authUserExistsFailure,
  authViewPasswordInput,
} from './actions';

export function* userExists({ username }: ReturnType<typeof authUserExists>): Generator<
  CallEffect<unknown>
  | PutEffect<AuthUserExists>
  | PutEffect<AuthUserExistsFailure>,
  void,
  any> {
  try {
    const response = yield call(api.post, '/users/auth/check', { username });
    yield put(authUserExists(response.data.username));
  } catch (error) {
    yield put(authUserExistsFailure(error));
  }
}

export function* login(auth: IAuth): Generator<CallEffect<unknown>
  | PutEffect<AuthSuccess>
  | PutEffect<AuthFailure>,
  void,
  IAuth> {
  try {
    const response = yield call(api.post, '/login', auth);
    yield put(authSuccess(response));
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* changePasswordInput(viewPasswordInput: boolean): Generator<
  PutEffect<AuthViewPasswordInput>,
  void,
  unknown> {
  yield put(authViewPasswordInput(viewPasswordInput));
}

export function* logout(): Generator<PutEffect<AuthLogout>, void, unknown> {
  yield put(authLogout());
}
