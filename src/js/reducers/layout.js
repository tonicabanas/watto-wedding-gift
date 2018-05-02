import { Map } from 'immutable';

import {
  SET_DEVICE,
} from 'actions/layout';

const initialState = Map({
  isMobile: false,
});

const actionsMap = {
  [SET_DEVICE]: (state, action) => state.set('isMobile', action.isMobile),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
