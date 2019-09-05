import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Work from './work';
import Feed from './feed';
import Contact from './contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Main = () => (
  <Route render={({location}) => (
    <TransitionGroup>
      <CSSTransition 
        key={location.key}
        timeout={500}
        classNames="fade">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/work" component={Work} />
          <Route path="/feed" component={Feed} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )}/>
);
export default Main;
