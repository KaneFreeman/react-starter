import { applyMiddleware, createStore, Middleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import { generateEpics } from 'redux-observable-util';

import { rootReducer } from '../reducers';
import { TestService } from '../services';
import { APP_INITIAL_STATE } from './app.state';

export * from './app.state';
export * from './example-redux.state';

export let middleware: Middleware[] = [];

middleware.push(
  createLogger({
    level: 'info',
    collapsed: true
  })
);

const epicMiddleware = createEpicMiddleware()
middleware.push(epicMiddleware);

export const store = createStore(rootReducer, APP_INITIAL_STATE,
  applyMiddleware(...middleware)
);

const testService = new TestService();
epicMiddleware.run(generateEpics(testService));
