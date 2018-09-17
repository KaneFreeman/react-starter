import { AnyAction } from 'redux';
import { NgEpic, createAction } from 'redux-observable-util';

import { GET_DATA, GET_DATA_SUCCESS } from '../actions';

export class TestService {
  @NgEpic(GET_DATA)
  testEpic(action: AnyAction, state$: any) {
    return fetch('data.json')
      .then(response => response.json())
      .then(response => {
        return createAction(GET_DATA_SUCCESS, response);
      });
  }
}