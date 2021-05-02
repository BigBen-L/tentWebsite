import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
