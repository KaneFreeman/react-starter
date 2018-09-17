import { AnyAction } from 'redux';
import { NgEpic } from 'redux-observable-util';

import { GET_DATA, GET_DATA_SUCCESS } from '../actions';

export class DataService {
  @NgEpic(GET_DATA)
  testEpic(action: AnyAction, state$: any) {
    return fetch('data.json')
      .then(response => response.json())
      .then(response => {
        return { type: GET_DATA_SUCCESS, payload: response };
      });
  }
}
