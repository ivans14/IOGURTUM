/* eslint-disable max-len */
import * as React from 'react';
import './/background.css';
import {Box, useTheme} from '@mui/material';
import {tokens} from '../theme.tsx';

// import Vector from '../assets/Vector.svg';

export default function Background() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box className='background_purple'>
      <Box className='background_green' style={{backgroundColor: colors.green[900]}}>

      </Box>
    </Box>
  );
}
