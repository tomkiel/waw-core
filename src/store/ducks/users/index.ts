import { Reducer } from 'redux';
import { IUsersState, UsersTypes } from './types';

const INITIAL_STATE: IUsersState = {
  users: [],
  error: false,
  loading: false,
};

const reducer: Reducer<IUsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UsersTypes.LOAD_SUCCESS:
      return { ...state, loading: false, users: action.payload.users };
    case UsersTypes.LOAD_FAILURE:
      return { ...state, loading: false, users: [] };
    default:
      return state;
  }
};

export default reducer;
