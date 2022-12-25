/* eslint-disable no-unused-vars */
import '../start/StartMenu.css';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {useTheme, Box, IconButton} from '@mui/material';
import {tokens, colorModeContext} from '../theme.tsx';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(colorModeContext);
  return (
    <div>
    <Box className='container_buttons' >
      <div className='inicio_div'>
        <ul>
          <li>
            <Link to='/'>
              <div className='inicio'
              style={{color: colors.grey[100]}}>Inicio</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='inicio_div'>
        <ul>
          <li>
            <Link to='/info'>
              <div className='inicio'
              style={{color: colors.grey[100]}}>Información</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='container_logo'>
          <img src={logo} className='Logo' />
      </div>
      <div className='inicio_div'>
        <div className='inicio'
        style={{color: colors.grey[100]}}>Productos</div>
      </div>
      <div className='inicio_div'>
        <div className='contact'>Contacto</div>
      </div>

    </Box>
    <div className='theme_button'>
      <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
    </div>
    </div>
  );
}
