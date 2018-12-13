import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import Home from '../../containers/Home';
import About from '../../containers/About';
import Technologies from '../../containers/Technologies';
import Projects from '../../containers/Projects';
import Contact from '../../containers/Contact';

import './Content.scss';

const Content = ({ offset, height, ...props }) => {
  const [active, setActive] = useState(props.location.pathname);

  useEffect(
    () => {
      setTimeout(() => document.querySelector('.content').scrollTo(0, 0), 200);

      if (props.location.pathname !== active) {
        setTimeout(() => setActive(props.location.pathname), 150);
      }
    },
    [props.location]
  );

  return (
    <>
      <main
        className={`content ${offset && 'zoom'}`}
        style={{ height: height - 76 }}
      >
        <TransitionGroup>
          <CSSTransition
            key={props.location.pathname !== active && props.location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={props.location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/technologies" component={Technologies} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Redirect from="*" to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
};

export default withRouter(Content);
