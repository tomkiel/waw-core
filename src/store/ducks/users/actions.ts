import { Action, action } from 'typesafe-actions';
import { UsersTypes, IUser } from './types';

export const loadRequest = (): Action<UsersTypes> => action(UsersTypes.LOAD_REQUEST);

export const loadSuccess = (data: IUser[]): Action<any> => action(
  UsersTypes.LOAD_SUCCESS, { data },
);

export const loadFailure = (): Action<UsersTypes> => action(UsersTypes.LOAD_FAILURE);
