import React from 'react';
import Routes from './pages/routes';
import { Provider } from 'react-redux';

import configStore from './reducers/config-store';
const store = configStore();

import './App.scss';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
