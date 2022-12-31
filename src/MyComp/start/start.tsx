import * as React from 'react';
import './StartMenu.css';
import yogur from '../../assets/yogur.png';
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
      <Box className={!hover2? 'background_purple':'background_purple_hover'}
        onMouseEnter={() => inside2()}
        onMouseLeave={() => outside2()}>
      </Box>
      <Box className={hover? 'background_green_hover' :
      hover2 ? 'background_green_hover2':
      'background_green'}
        onMouseEnter={() => inside()}
        onMouseLeave={() => outside()}
        style={{backgroundColor: colors.green[900]}}>
      </Box>
      <div>
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
          className={hover? 'banner2_hover2' :
          hover2 ? 'banner2':
          'banner2_hover2'}
          onMouseEnter={() => inside2()}
          onMouseLeave={() => outside2()}
        >
          <div className='bocata_div'>
            <img src={bocata} className={!hover2 ? 'bocata' : 'bocata_hover'} />
          </div>
          <div className={!hover2 ? 'banner_text' :
          'banner_text_skew_hover'}>
            Bar y cafetería
          </div>
        </div>
      </div>

    </div>
  );
}
