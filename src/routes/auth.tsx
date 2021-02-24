import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../components/Loader';

const Loading = (
  <Loader />
);
const LoginPage = React.lazy(() => import('../pages/Auth/Login'));

export const AuthRoutes = (): JSX.Element => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route exact path="/register" component={() => (<h1>Aqui</h1>)} />
      <Route component={() => <h1>Page not found!</h1>} />
    </Switch>
  </Suspense>
);
