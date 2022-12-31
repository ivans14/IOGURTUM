import './App.css';
import * as React from 'react';
import StartMenu from './MyComp/start/start.tsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Info from './MyComp/info/info.tsx';
import Products from './MyComp/productos/Productos.tsx';
import Navbar from './MyComp/navbar/navbar.tsx';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {colorModeContext, useMode} from './MyComp/theme.tsx';
import Drawer from './MyComp/drawer/drawer.tsx';


function App() {
  const [theme, colorMode] = useMode();
  console.log(theme);
  const [isDesktop, setDesktop] = React.useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
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

            </Routes>
            <div>
                <Products/>
              </div>
              {!isDesktop ?
              <Drawer/> : <Navbar />}

          </ThemeProvider>
        </colorModeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
