import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'dev/logger';

import rootReducer from 'reducers';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const initialState = {};

// Creating store
// Remove "serverSagas" and "sagaOptions" params
// if you are not using server rendering
export default () => {
  let store = null;
  let middleware = null;

  if (IS_PRODUCTION) {
    // In production we are adding only thunk
    middleware = applyMiddleware(thunk);
  } else {
    // In development mode beside thunk
    // logger and DevTools are added
    middleware = applyMiddleware(thunk, logger);

    // Enable DevTools if browser extension is installed
    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      );
    }
  }

  // Create store
  // with initial state if it exists
  store = createStore(
    rootReducer,
    initialState,
    middleware
  );


  // Return store only
  // But as an object for consistency
  return store;
};
