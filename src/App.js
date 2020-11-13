import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Set up react redux</h1>
      </div>
      ;
    </Provider>
  );
}

export default App;
