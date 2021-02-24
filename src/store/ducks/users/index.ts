import { Reducer } from 'redux';
import { UsersState, UsersTypes } from './types';

const INITIAL_STATE: UsersState = {
  users: [],
  error: false,
  loading: false,
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
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
