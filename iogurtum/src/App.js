import logo from './logo.jpg';
import './App.css';
import * as React from 'react';
import Test from './MyComp/text.tsx';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Test></Test>
      </div>
    </div>
  );
}

export default App;
