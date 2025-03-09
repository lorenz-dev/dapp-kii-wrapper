import { createTheme } from '@mui/material'

/*
* #0C0316
* #FFFFFF
* #5B3D7D
* #2A1D3C
* #C7A9F8
* #9AD1F7
* #312C7F
*
* */

export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    mode: 'dark',
    common: {
      white: '#FFFFFF',
      black: '#0C0316',
    },
    primary: {
      main: '#C7A9F8',
      // dark: '#2A1D3C',
      // light: '#C7A9F8',
      // contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2A1D3C',
      // dark: '#9AD1F7',
      // light: '#312C7F',
      contrastText: '#9AD1F7',
    },
  },
})
