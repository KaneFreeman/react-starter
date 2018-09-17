import * as React from 'react';

import { AppState } from '../store';

import './App.css';
import logo from '../logo.svg';

const App = ({ incrementCounter, counter, getData, data, state }: PropTypes) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="mt-3">
      <button className="btn btn-primary" onClick={incrementCounter}>Increment Counter</button>
    </p>
    <p className="mt-3">{counter}</p>
    <p className="mt-3">
      <button className="btn btn-primary" onClick={getData}>Get Data</button>
    </p>
    <p className="mt-3">{JSON.stringify(data)}</p>
    <h3>State</h3>
    <p className="mt-3">{JSON.stringify(state)}</p>
  </div>
);

type PropTypes = {
  incrementCounter: () => void;
  getData: () => void;
  data: any;
  counter: number,
  state: AppState
}

export default App
