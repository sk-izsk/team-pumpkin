import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    h1: {
      // could customize the h1 variant as well
    },
  },
  palette: {
    primary: { main: '#DF1B1B', dark: '#ededed' },
    secondary: { main: '#000000', light: '#ffffff', dark: '#cccccc' },
  },
});