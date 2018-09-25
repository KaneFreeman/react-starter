import { assign } from 'redux-observable-util';

import { AnyAction } from 'redux';

import { GET_DATA_SUCCESS, INCREMENT_COUNTER } from '../actions';
// import { EXAMPLE_REDUX_INITIAL_STATE } from '../store';

export function exampleReduxReducer(state: any = {}, action: AnyAction) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return assign(state, { exampleCounter: state.exampleCounter + 1 });

    case GET_DATA_SUCCESS:
      return assign(state, { data: action.payload });

    default:
      return state;
  }
}
