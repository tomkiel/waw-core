import React, { Suspense } from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import history from './history';

import AuthRoutes from '../components/Auth/routes';
import AdminRoutes from '../components/Admin/routes';
import Loader from '../components/Loader';
import store from '../store';
import { isAuthenticated } from '../services/auth';

const loading = (
  <Loader />
);

const PrivateRoute = ({ component: Component, path: Path }: any) => (
  <Route
    path={Path}
    render={() => (
      isAuthenticated() ? (
        <Component />
      ) : (
        <Redirect to="/login" />
      )
    )}
  />
);

export const Routes = (): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={loading}>
        <Switch>
          {AuthRoutes.map((item) => (
            <Route
              path={item.path}
              component={item.component}
              key={item.path}
            />
          ))}
          {AdminRoutes.map((item) => (
            <PrivateRoute
              path={item.path}
              component={item.component}
              key={item.path}
            />
          ))}
          <Route path="/404" exact component={() => <h1>Page not found!</h1>} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </Provider>
);
