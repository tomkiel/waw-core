import React from 'react';

const LoginPage = React.lazy(() => import('./Pages/Login'));

export default [
  { path: '/login', component: LoginPage },
];
