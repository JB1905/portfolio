import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group';

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

const Transition = ({ offset, children, location }) => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight - 76);

    updateHeight();

    window.addEventListener('resize', () => updateHeight());
    window.removeEventListener('resize', () => updateHeight());
  }, []);

  return (
    <TransitionGroup
      className={`layout ${offset ? 'hidden' : ''}`}
      style={{ height }}
    >
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
