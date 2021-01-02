import { createMuiTheme } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#111',
      default: '#000',
      paper: '#000'
    },
    primary: {
      main: '#FEDC3D',
    },
    secondary: {
      main: '#FEDC3D'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#F7F7F7'
    }
  },
  shadows,
  typography
});

export default theme;
