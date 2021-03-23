import {
  call,
  CallEffect,
  put,
  PutEffect,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { CallHistoryMethodAction, push } from 'connected-react-router';

import api from '../../../services/api';
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
  authRequest,
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
    const response = yield call(api.post, '/auth/check', { username });
    if (response.status !== 200) {
      yield put(authUserExistsFailure(true));
    } else {
      yield put(authUserExists(response.data.username));
    }
  } catch (error) {
    yield put(authUserExistsFailure(error));
  }
}

export function* login({ auth }: ReturnType<typeof authRequest>): Generator<CallEffect<unknown>
  | PutEffect<AuthSuccess>
  | PutEffect<CallHistoryMethodAction<[any]>>
  | PutEffect<AuthFailure>,
  void,
  any> {
  try {
    const response: AxiosResponse<IAuth> = yield call(api.post, '/auth/login', auth);
    localStorage.setItem('jwt-token', response.data.token || '');
    localStorage.setItem('refresh-token', response.data.refreshToken || '');
    yield put(authSuccess(response.data));
    yield put(push('/admin'));
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* refreshAccessToken(): Generator<string
  | CallEffect<unknown>
  | PutEffect<AuthSuccess>
  | PutEffect<AuthFailure>
  | null, void, AxiosResponse<IAuth>> {
  try {
    const token = yield localStorage.getItem('refresh-token');
    const refreshToken = yield localStorage.getItem('refresh-token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response: AxiosResponse<IAuth> = yield call(api.post, '/auth/refresh-token', { refreshToken }, config);
    localStorage.setItem('jwt-token', response.data.token || '');
    localStorage.setItem('refresh-token', response.data.refreshToken || '');
    yield put(authSuccess(response.data));
  } catch (error) {
    yield put(authFailure(error));
    yield call(logout);
  }
}

export function* changePasswordInput(viewPasswordInput: boolean): Generator<
  PutEffect<AuthViewPasswordInput>,
  void,
  unknown> {
  yield put(authViewPasswordInput(viewPasswordInput));
}

export function* logout(): Generator<PutEffect<AuthLogout>
  | PutEffect<CallHistoryMethodAction<[string, unknown?]>>,
  void,
  unknown> {
  localStorage.clear();
  yield put(authLogout());
  yield put(push('/login'));
}
