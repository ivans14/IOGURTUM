import * as React from 'react';
import './StartMenu.css';
import logo from '../../assets/logo.png';
import yogur from '../../assets/yogur.png';
import coffee from '../../assets/coffee.png';
import yogur2 from '../../assets/yogur2.png';
import bocata from '../../assets/bocata.png';
import {useTheme, Box} from '@mui/material';
import {tokens} from '../theme.tsx';
import Products from '../productos/Productos.tsx';

export default function StartMenu() {
  const [hover, sethover] = React.useState(false);
  const inside = () => {
    sethover(true);
  };
  const outside = () => {
    sethover(false);
  };
  const [hover2, sethover2] = React.useState(false);
  const inside2 = () => {
    sethover2(true);
  };
  const outside2 = () => {
    sethover2(false);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(colorModeContext);
  return (
    <div>
      {/* <div
        style={{backgroundColor: colors.purple[900]}}
        className='start_menu'
      ></div> */}
      {/* <div className='container_logo'>
          <img src={logo} className='Logo' />
      </div> */}
      <Box className='background_purple'
        onMouseEnter={() => inside2()}
        onMouseLeave={() => outside2()}>
      </Box>
      <Box className={!hover? 'background_green' : 'background_green_hover'}
        onMouseEnter={() => inside()}
        onMouseLeave={() => outside()}
        style={{backgroundColor: colors.green[900]}}>
      </Box>
      <div
        className='banner'
        onMouseEnter={() => inside()}
        onMouseLeave={() => outside()}
      >
        <div className='yogur2_div'>
          <img src={yogur} className={!hover ? 'yogur2' : 'yogur2_hover'} />
        </div>
        <div className={!hover ? 'banner_text' : 'banner_text_hover'}>
          Yogur helado
        </div>
      </div>
      <div
        className='banner2'
        onMouseEnter={() => inside2()}
        onMouseLeave={() => outside2()}
      >
        <div className='bocata_div'>
          <img src={bocata} className={!hover2 ? 'bocata' : 'bocata_hover'} />
        </div>
        <div className={!hover2 ? 'banner_text' : 'banner_text_hover'}>
          Bar y cafetería
        </div>
      </div>
        <Products/>
    </div>
  );
}
