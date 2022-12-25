import './App.css';
import * as React from 'react';
import Background from './MyComp/background/background.tsx';
import StartMenu from './MyComp/start/start.tsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Info from './MyComp/info/info.tsx';
import Products from './MyComp/productos/Productos.tsx';
import Navbar from './MyComp/navbar/navbar.tsx';
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
            {/* <Background >
            </Background> */}

            <Routes>
              <Route path='/' element={<StartMenu />} />
              <Route path='/info' element={<Info />} />
              <Route path='/' element={<Products />} />
            </Routes>
            <Navbar />
          </ThemeProvider>
        </colorModeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
