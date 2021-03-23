import {
  AuthTypes,
  IAuth,
  AuthFailure,
  AuthRequest,
  AuthSuccess,
  AuthUserExists,
  AuthLogout,
  AuthUserExistsFailure,
  AuthUserExistsRequest,
  AuthViewPasswordInput,
  RefreshTokenRequest,
  AuthLogoutRequest,
} from './types';

export const authRequest = (auth: IAuth) : AuthRequest => ({
  type: AuthTypes.AUTH_REQUEST,
  auth,
});

export const authSuccess = (auth: IAuth): AuthSuccess => ({
  type: AuthTypes.AUTH_SUCCESS,
  auth,
});

export const authFailure = (error: boolean): AuthFailure => ({
  type: AuthTypes.AUTH_FAILURE,
  error,
});

export const refreshToken = (): RefreshTokenRequest => ({
  type: AuthTypes.REFRESH_TOKEN_REQUEST,
});

export const authUserExistsRequest = (username: string): AuthUserExistsRequest => ({
  type: AuthTypes.AUTH_USER_EXISTS_REQUEST,
  username,
});

export const authUserExists = (username: string): AuthUserExists => ({
  type: AuthTypes.AUTH_USER_EXISTS,
  username,
});

export const authUserExistsFailure = (error: boolean): AuthUserExistsFailure => ({
  type: AuthTypes.AUTH_USER_EXISTS_FAILURE,
  error,
});

export const authViewPasswordInput = (viewPasswordInput: boolean) : AuthViewPasswordInput => ({
  type: AuthTypes.AUTH_VIEW_PASSWORD_INPUT,
  viewPasswordInput,
});

export const authLogoutRequest = (): AuthLogoutRequest => ({
  type: AuthTypes.LOGOUT_REQUEST,
});

export const authLogout = (): AuthLogout => ({
  type: AuthTypes.LOGOUT,
});
