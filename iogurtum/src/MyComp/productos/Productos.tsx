import * as React from 'react';
import {useTheme} from '@mui/material';
import {tokens} from '../theme.tsx';
import './products.css';

export default function Products() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div style={{backgroundColor: colors.purple[600]}} className='productos'>
    <h1>PRODUCTOS</h1>
    </div>
  );
}
