import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router/immutable';

import history from '../routes/history';

import { IUsersState } from './ducks/users/types';
import rootSaga from './ducks/rootSaga';
import createRootReducer from './ducks/rootReducers';
import { IAuthState } from './ducks/auth/types';
import { IGlobalState } from './ducks/global/types';

export interface ApplicationState {
  global: IGlobalState,
  auth: IAuthState,
  users: IUsersState
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);
export default store;
