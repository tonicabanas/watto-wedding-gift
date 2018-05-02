import { routeDataManager } from 'services/routeDataManager';

export const ROUTE_CHANGE = 'ROUTE_CHANGE';

export function checkRoute(location) {
  return (dispatch, getState) => {
    routeDataManager(dispatch, getState, location);
  };
}
