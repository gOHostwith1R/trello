import React from 'react';
import { App } from './app';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './global.css';
import { store } from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
