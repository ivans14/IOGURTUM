import './App.css';
import * as React from 'react';
import Background from './MyComp/background.tsx';
import StartMenu from './MyComp/start.tsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Info from './MyComp/info.tsx';
import Products from './MyComp/Productos.tsx';
import Navbar from './MyComp/navbar.tsx';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {colorModeContext, useMode} from './MyComp/theme.tsx';

function App() {
  const [theme, colorMode] = useMode();
  console.log(theme);
  return (
    <div>
      <Router>
        <colorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Background />

            <Routes>
              <Route path='/' element={<StartMenu />} />
              <Route path='/info' element={<Info />} />
              <Route path='/info' element={<Products />} />
            </Routes>
            <Navbar />
          </ThemeProvider>
        </colorModeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
