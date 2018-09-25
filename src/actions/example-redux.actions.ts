import { AnyAction } from 'redux';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

/**
 * Increment the counter variable in the store
 */
export function incrementCounter(): AnyAction {
  return { type: INCREMENT_COUNTER };
}

/**
 * Make an HTTP Get call, store the response in the store
 */
export function getData(): AnyAction {
  return {
    type: GET_DATA,
    url: 'data.json',
    successAction: GET_DATA_SUCCESS
  };
}
