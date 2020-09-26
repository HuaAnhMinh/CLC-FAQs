import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage';
import PageNotFound from './components/PageNotFound';
import Topic from './components/Topic';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:topicName" exact component={Topic} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
