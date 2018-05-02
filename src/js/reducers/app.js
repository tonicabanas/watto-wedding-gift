import { Map } from 'immutable';

import {
  SET_EXAMPLE_DATA,
} from 'actions/app';

const initialState = Map({
  message: '',
});

const actionsMap = {
  [SET_EXAMPLE_DATA]: (state, action) => state.set('message', action.message),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
