import React from 'react';

import ProfilePage from './Pages/Profile';

const HomePage = React.lazy(() => import('./Pages/Home'));

export default [
  { path: '/admin', component: HomePage },
  { path: '/profile', component: ProfilePage },
];
