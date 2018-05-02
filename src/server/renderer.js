// import our main App component
import { getBundles } from 'react-loadable/webpack';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const htmlData = fs.readFileSync(resolveApp('build/index.html'), 'utf8');
const reactLoadableChunks = JSON.parse(fs.readFileSync(resolveApp('build/react-loadable.json'), 'utf8'));

const getServerHTML = (appHtml, modules, dehydratedState = null, isMobile) => {
  const extractAssets = getBundles(reactLoadableChunks, modules).filter(asset => asset.file.indexOf('.map') === -1);
  const extraChunks = extractAssets.map(asset => `<script type="text/javascript" src="${asset.file}"></script>`);

  if (dehydratedState) extraChunks.unshift('');

  // now inject the rendered app into our html and send it

  return htmlData
    .replace('<html lang="en">', `<html lang="en" class=${isMobile ? 'mobile' : 'desktop'}>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>${dehydratedState ? `<script>window.__initialState__ = ${dehydratedState};</script>` : ''}`
    )
    .replace('</body>', `${extraChunks.join('')}</body>`);
};

export default getServerHTML;
