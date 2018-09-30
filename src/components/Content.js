import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import ScrollToTop from '../ScrollToTop';

import { Home } from '../containers/Home';
import About from '../containers/About';
import Technologies from '../containers/Technologies';
import Projects from '../containers/Projects';
import { Contact } from '../containers/Contact';

export const Content = ({ offset, height }) => (
  <div
    className={`container content ${offset ? 'zoom' : ''}`}
    style={{ height: height - 76 }}
  >
    <ScrollToTop>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/technologies" component={Technologies} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Redirect from="*" to="/" />
    </ScrollToTop>
  </div>
);
