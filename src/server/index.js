import express from 'express';
import url from 'url';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import md from 'ismobilejs';

import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import Immutable from 'immutable';
import Serialize from 'remotedev-serialize/immutable';

import configureStore from 'store';
import routeDataManager from 'services/routeDataManager';

import App from 'views/App';
import renderer from './renderer';

const app = express();
const hostname = 'localhost';
const port = 8080;

// Disabling "Powered by" headers
app.disable('x-powered-by');

// import our main App component
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
// Telling server to serve our client app build as static assets
app.use('/static', express.static(resolveApp('build/static')));

function sendResponse(req, res, store) {
  // Dehydrates the state
  // Serialize then another stringify to escape it
  const dehydratedState = JSON.stringify(Serialize(Immutable).stringify(store.getState()));

  // Context is passed to the StaticRouter and it will attach data to it directly
  const context = {};
  const modules = [];
  
  // Before sending the request app is rendered to a string
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Loadable.Capture report={m => modules.push(m)}>
          <App />
        </Loadable.Capture>
      </StaticRouter>
    </Provider>
  );

  const serverHtml = renderer(appHtml, modules, dehydratedState, md(req.headers['user-agent']).phone);
  // Context has url, which means `<Redirect>` was rendered somewhere
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // We're good, send the response
    res.status(context.status || 200).send(serverHtml);
  }
}

// Placeholder for async request
function handleRequest(req, res) {
  // Creates empty store for each request
  const store = configureStore();
  const location = url.parse(req.url);
  routeDataManager(store.dispatch, store.getState, location).then(() => sendResponse(req, res, store));
}

// Specific routes which need to fetch async data on the server
// pass two additional params to "handleRequest"
// array of sagas which should be completed
// and object containing saga's options (usually req.params)
/*
app.get('/people', (req, res) => {
  handleRequest(req, res, [getPeopleServer]);
});
*/

// All other routes
app.use((req, res) => {
  handleRequest(req, res);
});

// Error handling
/*
app.use((error, req, res) => {
  res.status(error.status || 500);

  res.render('error', {
    message: error.message,
    // Display stack trace only in development mode
    error: IS_DEVELOPMENT ? error : null,
  });
});
*/

// Start listening
Loadable.preloadAll().then(() => {
  app.listen(port, (error) => {
    if (error) {
      console.error(error); // eslint-disable-line no-console
    } else {
      console.info(`\n★★ Listening on port ${ port }. Open up http://${ hostname }:${ port }/ in your browser.\n`); // eslint-disable-line
    }
  });
});
