import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage';
import Topic from './components/Topic';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:topicName" component={Topic} />
      </Switch>
    </Router>
  );
}

export default App;
