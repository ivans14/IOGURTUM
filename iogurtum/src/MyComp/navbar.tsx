import '../styles/StartMenu.css';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from '@mui/material';
import {tokens} from './theme.tsx';

export default function Navbar() {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <div className='container_buttons'>
      <div className='inicio_div'>
        <ul>
          <li>
            <Link to='/'>
              <div className='inicio'>Inicio</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='inicio_div'>
        <ul>
          <li>
            <Link to='/info'>
              <div className='inicio'>Información</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='inicio_div'>
        <div className='inicio'>Productos</div>
      </div>
      <div className='inicio_div'>
        <div className='contact'>Contacto</div>
      </div>
    </div>
  );
}
