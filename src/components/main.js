import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Career from './career';
import Resume from './resume';
import Contact from './contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/career" component={Career} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
export default Main;
