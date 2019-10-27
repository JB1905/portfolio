import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group';
import { useViewport } from 'react-viewport-hooks';

const Transition = ({ offset, children, location }) => {
  const { vh } = useViewport();

  useEffect(() => {
    const { matches } = window.matchMedia('(display-mode: standalone)');

    document.body.style.setProperty('--vh', matches ? '100vh' : `${vh}px`);
  }, [vh]);

  const timeout = 250;

  const getTransitionStyles = {
    entering: {
      position: 'absolute',
      opacity: 0
    },
    entered: {
      transition: `opacity ${timeout}ms ease`,
      opacity: 1
    },
    exiting: {
      transition: `all ${timeout}ms ease`,
      opacity: 0
    }
  };

  return (
    <TransitionGroup className={`layout ${offset ? 'hidden' : ''}`}>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout
        }}
      >
        {status => (
          <main
            style={{
              ...getTransitionStyles[status]
            }}
          >
            {children}
          </main>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};

Transition.propTypes = {
  offset: PropTypes.bool,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
};

export default Transition;
