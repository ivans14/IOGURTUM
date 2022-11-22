/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import {createContext, useState, useMemo} from 'react';
import {createTheme} from '@mui/material/styles';

export const tokens = (mode) => ({
  ...(mode == 'dark'
    ? {
        purple: {
          100: '#e6d9f6',
          200: '#cdb3ed',
          300: '#b48ee4',
          400: '#9b68db',
          500: '#8242d2',
          600: '#6835a8',
          700: '#4e287e',
          800: '#341a54',
          900: '#1a0d2a',
        },

        green: {
          100: '#ccf3cc',
          200: '#99e799',
          300: '#66db67',
          400: '#33cf34',
          500: '#00c301',
          600: '#009c01',
          700: '#007501',
          800: '#004e00',
          900: '#002700',
        },
      }
    : {
        purple: {
          100: '#1a0d2a',
          200: '#341a54',
          300: '#4e287e',
          400: '#6835a8',
          500: '#8242d2',
          600: '#9b68db',
          700: '#b48ee4',
          800: '#cdb3ed',
          900: '#e6d9f6',
        },

        green: {
          100: '#002700',
          200: '#004e00',
          300: '#007501',
          400: '#009c01',
          500: '#00c301',
          600: '#33cf34',
          700: '#66db67',
          800: '#99e799',
          900: '#ccf3cc',
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.green[300],
            },
            secondary: {
              main: colors.purple[300],
            },
            background: {
              default: '#1c102b',
            },
          }
        : {
            primary: {
              main: colors.green[500],
            },
            secondary: {
              main: colors.purple[500],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    },
  };
};

export const colorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
