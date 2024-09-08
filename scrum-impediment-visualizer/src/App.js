import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/core';
import { ThemeProvider } from '@mui/core/styles';
import theme from './theme';
import ImpedimentList from './components/ImpedimentList';
import ImpedimentDetails from './components/ImpedimentDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={ImpedimentList} />
            <Route path="/impediment/:id" component={ImpedimentDetails} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
