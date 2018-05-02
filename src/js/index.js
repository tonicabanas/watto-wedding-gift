/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'views/App';

import routeDataManager from 'services/routeDataManager';
import configureStore from 'store';

// Browser polyfills
import md from 'ismobilejs';
import { setDevice } from 'actions/layout';

// Load common SCSS
import 'scss/base/corrections.scss';
import 'scss/base/reset.scss';

import 'scss/theme/html.critical.scss';
import 'scss/theme/fonts.critical.scss';

const store = configureStore();

// Check device
const device = md.tablet ? 'tablet' : md.phone ? 'mobile' : 'desktop';
const mediaListener = matchMedia('screen and (max-width: 768px)');

if (device === 'mobile') {
  store.dispatch(setDevice(true));
} else {
  mediaListener.addListener((mql) => {
    store.dispatch(setDevice(mql.matches));
  });
  store.dispatch(setDevice(mediaListener.matches));
}

// If SSR is enabled, hydrate instead of rendering
if (process.env.HYDRATE) {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
} else {
  // Fetch initial route data
  routeDataManager(store.dispatch, store.getState, window.location);
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}
