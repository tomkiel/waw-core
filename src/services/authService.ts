import { AxiosResponse } from 'axios';
import { IAuth } from '../store/ducks/auth/login/types';
import api from './api';

export function userExistsService({ username }: IAuth): Promise<AxiosResponse<IAuth>> {
  return api.post('/username', username);
}
