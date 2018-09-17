import { AnyAction } from 'redux';
import { createAction } from 'redux-observable-util';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

/**
 * Increment the counter variable in the store
 */
export function incrementCounter(): AnyAction {
  return  createAction(INCREMENT_COUNTER);
}

/**
 * Make an HTTP Get call, store the response in the store
 */
export function getData(): AnyAction {
  return createAction(GET_DATA, {
    url: 'assets/data.json',
    successAction: GET_DATA_SUCCESS
  });
}
