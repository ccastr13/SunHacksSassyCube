import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
