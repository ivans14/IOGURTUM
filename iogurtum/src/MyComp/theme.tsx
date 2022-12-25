/* eslint-disable no-unused-vars */
import {createContext, useState, useMemo} from 'react';
import {createTheme} from '@mui/material/styles';

export const tokens = (mode) => ({
  ...(mode == 'dark'
    ? {
      grey: {
        100: '#e0e0e0',
        200: '#c2c2c2',
        300: '#a3a3a3',
        400: '#858585',
        500: '#666666',
        600: '#525252',
        700: '#3d3d3d',
        800: '#292929',
        900: '#141414',
      },

      purple: {
          100: '#e6d9f6',
          200: '#cdb3ed',
          300: '#b48ee4',
          400: '#9b68db',
          500: '#8242d2',
          600: '#6835a8',
          700: '#4e287e',
          800: '#2a1545',
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
      grey: {
        100: '#141414',
        200: '#292929',
        300: '#3d3d3d',
        400: '#525252',
        500: '#666666',
        600: '#858585',
        700: '#a3a3a3',
        800: '#c2c2c2',
        900: '#e0e0e0',
      },
        purple: {
          100: '#1a0d2a',
          200: '#341a54',
          300: '#4e287e',
          400: '#6835a8',
          500: '#8242d2',
          600: '#9b68db',
          700: '#b48ee4',
          800: '#e6d9f6',
          900: '#fcfcfc',
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
            neutral: {
              light: colors.grey[100],
            },
            background: {
              default: colors.purple[800],
              green: colors.green[800],
            },
          }
        : {
            primary: {
              main: colors.green[500],
            },
            secondary: {
              main: colors.purple[500],
            },
            neutral: {
              dark: colors.grey[900],
            },
            background: {
              default: colors.purple[800],
              green: colors.green[800],
            },
          }),
    },
  };
};

export const colorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('light');

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
