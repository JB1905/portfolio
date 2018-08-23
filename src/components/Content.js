import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import About from '../containers/About';
import Technologies from '../containers/Technologies';
import Projects from '../containers/Projects';
import Contact from '../containers/Contact';

export const Content = props => (
  <div
    className={`container content ${props.offset ? 'zoom' : ''}`}
    style={{ height: props.height - 76 }}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/technologies" component={Technologies} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
