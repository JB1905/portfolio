import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import { Home } from '../containers/Home';
import About from '../containers/About';
import Technologies from '../containers/Technologies';
import Projects from '../containers/Projects';
import { Contact } from '../containers/Contact';

function fade(val) {
  return spring(val, {
    stiffness: 300,
    damping: 30
  });
}

const transition = {
  atEnter: {
    opacity: 0.001
  },

  atLeave: {
    opacity: fade(0.001)
  },

  atActive: {
    opacity: fade(1)
  }
};

export const Content = props => (
  <div
    className={`container content ${props.offset ? 'zoom' : ''}`}
    style={{ height: props.height - 76 }}>
    <AnimatedSwitch
      atEnter={transition.atEnter}
      atLeave={transition.atLeave}
      atActive={transition.atActive}
      className="switch-wrapper">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/technologies" component={Technologies} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Redirect from="*" to="/" />
    </AnimatedSwitch>
  </div>
);
