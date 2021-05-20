import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './store';
import GlobalStyle from './globalStyle';

ReactDom.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
