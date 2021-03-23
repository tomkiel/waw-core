import React, { useEffect } from 'react';

import './profile.scss';
import { Header } from '../../Core';

export default function Profile(): React.ReactElement {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <div className="app">
      <Header color="profile" />
    </div>
  );
};
