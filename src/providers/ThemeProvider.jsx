import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme from 'theme';

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}        
		</MuiThemeProvider>
  );
}

export default ThemeProvider;