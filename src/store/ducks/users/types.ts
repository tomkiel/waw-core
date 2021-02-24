/**
 *  Action types
 */
// eslint-disable-next-line no-shadow
export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE'
}

/**
 * Data Types
 */
export interface User {
  username: string;
  password: string;
}

/**
 * State Types
 */
export interface UsersState {
  readonly users: User[];
  readonly loading: boolean;
  readonly error: boolean;
}
