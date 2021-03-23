import jwt from 'jwt-decode';
import store from '../store';

import * as authActions from '../store/ducks/auth/actions';

export const isAuthenticated = (): boolean => {
  const token: string | null = localStorage.getItem('jwt-token');
  if (token) {
    const decodedToken: any = jwt(token);
    const dateNow = new Date();
    if (decodedToken.exp < dateNow.getTime()) {
      store.dispatch(authActions.refreshToken());
    }
    return true;
  }
  return false;
};
