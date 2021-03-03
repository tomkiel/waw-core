import { Reducer } from 'redux';
import { AuthTypes, IAuthState, AuthAction } from './types';

const INITIAL_STATE: IAuthState = {
  username: undefined,
  user: undefined,
  error: false,
  loading: false,
  viewPasswordInput: false,
};

const reducer: Reducer<IAuthState> = (state = INITIAL_STATE, action: AuthAction) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.auth,
        loading: false,
      };
    case AuthTypes.AUTH_USER_EXISTS_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case AuthTypes.AUTH_USER_EXISTS:
      return {
        ...state,
        username: action.username,
        error: false,
        loading: false,
        viewPasswordInput: true,
      };
    case AuthTypes.AUTH_USER_EXISTS_FAILURE:
      return {
        ...state,
        error: true,
        viewPasswordInput: false,
        loading: false,
      };
    case AuthTypes.AUTH_VIEW_PASSWORD_INPUT:
      return {
        ...state,
        viewPasswordInput: action.viewPasswordInput,
      };
    case AuthTypes.AUTH_FAILURE:
      return {
        loading: false,
        error: true,
      };
    case AuthTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
