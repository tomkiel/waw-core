import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store'
import './styles/theme.scss';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
