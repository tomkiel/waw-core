/**
 *  Action types
 */

import { IUser } from '../users/types';

export enum AuthTypes {
  AUTH_REQUEST = '@auth/AUTH_REQUEST',
  AUTH_SUCCESS = '@auth/AUTH_SUCCESS',
  AUTH_FAILURE = '@authAUTH_FAILURE',

  REFRESH_TOKEN_REQUEST = '@auth/REFRESH_TOKEN_REQUEST',

  AUTH_USER_EXISTS_REQUEST = '@auth/AUTH_USER_EXISTS_REQUEST',
  AUTH_USER_EXISTS = '@auth/AUTH_USER_EXISTS',
  AUTH_USER_EXISTS_FAILURE = '@auth/AUTH_USER_EXISTS_FAILURE',

  AUTH_VIEW_PASSWORD_INPUT = '@auth/AUTH_VIEW_PASSWORD_INPUT',

  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
  LOGOUT = '@auth/LOGOUT'
}

/**
 * Data Types
 */
export interface IAuth {
  username: string;
  password: string;
  user?: IUser;
  token?: string;
  refreshToken?: string;
}

export interface AuthRequest {
  type: AuthTypes.AUTH_REQUEST;
  auth: IAuth
}

export interface AuthSuccess {
  type: AuthTypes.AUTH_SUCCESS;
  auth: IAuth;
}

export interface AuthFailure {
  type: AuthTypes.AUTH_FAILURE;
  error: boolean
}

export interface RefreshTokenRequest {
  type: AuthTypes.REFRESH_TOKEN_REQUEST;
}

export interface AuthUserExistsRequest {
  type: AuthTypes.AUTH_USER_EXISTS_REQUEST;
  username: string;
}

export interface AuthUserExists {
  type: AuthTypes.AUTH_USER_EXISTS;
  username: string;
}

export interface AuthUserExistsFailure {
  type: AuthTypes.AUTH_USER_EXISTS_FAILURE;
  error: boolean
}

export interface AuthViewPasswordInput {
  type: AuthTypes.AUTH_VIEW_PASSWORD_INPUT;
  viewPasswordInput: boolean;
}

export interface AuthLogoutRequest {
  type: AuthTypes.LOGOUT_REQUEST;
}

export interface AuthLogout {
  type: AuthTypes.LOGOUT;
}

export type AuthAction =
  | AuthRequest
  | AuthSuccess
  | AuthFailure
  | RefreshTokenRequest
  | AuthUserExistsRequest
  | AuthUserExists
  | AuthUserExistsFailure
  | AuthViewPasswordInput
  | AuthLogoutRequest
  | AuthLogout;

/**
 * State Types
 */
export interface IAuthState {
  readonly username?: string;
  readonly user?: IUser;
  readonly loading: boolean;
  readonly error: boolean;
  readonly viewPasswordInput?: boolean;
}
