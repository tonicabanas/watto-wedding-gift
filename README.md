Mr. Milu React boilerplate.

## Features

- [x] React
- [x] React router v4
- [x] Redux
- [x] Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
- [x] Universal rendering
- [x] Webpack 3 (development and production config)
- [x] Immutable reducer data
- [x] Babel - static props, decorators
- [x] PostCSS (with autoprefixing)
- [x] Fast SASS Loader (With url resolver)
- [x] Tree shaking build
- [x] Universal rendering with async data
- [x] Inject CSS files directly in the html with .inline.scss
- [x] Inline SVGs with .inline.svg

## TODO

- [ ] Internationalization
- [ ] PostCSS (Study)
- [ ] Redux-saga (Study)
- [ ] Development mode for Server Side Rendering (Hot reloading of the server)
- [ ] Tests

## How to install

```
$ npm install
```

### libpng issues

Installing on some versions of OSX may raise errors with a [missing libpng dependency](https://github.com/tcoopman/image-webpack-loader/issues/51#issuecomment-273597313): 
```
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
```
This can be remedied by installing the newest version of libpng with [homebrew](http://brew.sh/):

```
brew install libpng
```

## Folder Structure

After creation, your project should look like this:

```
mrm-react-boilerplate/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
      ...
    scss/
      app.scss
      ...
    js/
      index.js
      actions/
      components/
      constants/
      reducers/
      views/
        App/
          index.js
          style.scss
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/js/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

