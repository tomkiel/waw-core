import React, { useEffect } from 'react';

import './home.scss';
import { Header } from '../../Core';

export default function Home(): React.ReactElement {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className="app">
      <Header color="home" />
    </div>
  );
};
