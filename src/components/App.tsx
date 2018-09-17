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
    <p className="App-intro">
      <button onClick={incrementCounter}>Increment Counter</button>
    </p>
    <p className="App-intro">{counter}</p>
    <p className="App-intro">
      <button onClick={getData}>Get Data</button>
    </p>
    <p className="App-intro">{JSON.stringify(data)}</p>
    <h3>State</h3>
    <p className="App-intro">{JSON.stringify(state)}</p>
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
