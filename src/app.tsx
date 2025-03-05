import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TestPage from './pages/test';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={TestPage} />
    </Switch>
  );
};

export default App;
