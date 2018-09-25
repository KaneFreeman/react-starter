import { AnyAction } from 'redux';
import { Epic } from 'redux-observable-util';

import { GET_DATA } from '../actions';

export class DataService {
  @Epic(GET_DATA)
  testEpic(action: AnyAction, state$: any) {
    return fetch(action.url)
      .then(response => response.json())
      .then(response => {
        return { type: action.successAction, payload: response };
      });
  }
}
