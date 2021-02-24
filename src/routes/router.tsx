import React from 'react';
import { HashRouter } from 'react-router-dom';

import { AuthRoutes } from './auth';

export const Routes = () : JSX.Element => (
  <HashRouter>
    <AuthRoutes />
  </HashRouter>
);
