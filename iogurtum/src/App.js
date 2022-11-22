import './App.css';
import * as React from 'react';
import Background from './MyComp/background.tsx';
import StartMenu from './MyComp/start.tsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Info from './MyComp/info.tsx';
import Products from './MyComp/Productos.tsx';
import Navbar from './MyComp/navbar.tsx';

function App() {
  return (
    <div>
      <Router>
        <Background />
        <Routes>
          <Route path='/' element={<StartMenu />} />
          <Route path='/info' element={<Info />} />
          <Route path='/info' element={<Products />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
