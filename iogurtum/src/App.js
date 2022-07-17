import './App.css';
import * as React from 'react';
import Background from './MyComp/background.tsx';
import StartMenu from './MyComp/start.tsx';

function App() {
  return (
    <div>
      <Background/>
      <StartMenu/>
    </div>
  );
}

export default App;
