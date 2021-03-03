import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IUsersState } from './ducks/users/types';
import rootReducer from './ducks/rootReducers';
import rootSaga from './ducks/rootSaga';
import { IAuthState } from './ducks/auth/login/types';

export interface ApplicationState {
  auth: IAuthState,
  users: IUsersState
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
