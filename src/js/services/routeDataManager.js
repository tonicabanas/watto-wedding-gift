import { matchPath } from 'react-router';
import { routeCodes } from 'constants/routes';

import { getAppData } from 'actions/app';

export default function routeDataManager(dispatch, getState, location) {
  // Actions are stored and block the request / flow
  const actions = [];
  if (matchPath(location.pathname, { path: routeCodes.DASHBOARD })) {
    actions.push(getAppData(dispatch, getState));
  }
  return Promise.all(actions);
}
