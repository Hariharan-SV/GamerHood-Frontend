import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { isLoggedIn } from './controllers/user';

const onLoad = async() => {
  let value = false;
  try {
    value = await isLoggedIn();
  } catch (e) {
    alert(e);
  }
  return value;
}

const App = () => {
  const [authenticated,isAuthenticated] = React.useState(onLoad);
  React.useEffect(() => {
    const onLoad = async() => {
      try {
        const value = await isLoggedIn();
        isAuthenticated(value);
      } catch (e) {
        alert(e);
      }
    }
    onLoad();
  }, []);

  const routing = useRoutes(routes(authenticated,isAuthenticated));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
