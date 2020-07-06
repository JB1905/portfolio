import React, { useEffect } from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { useViewport } from 'react-viewport-hooks';
import sTrimmer from 's-trimmer';

import { useMenu } from '../hooks/useMenu';

interface Props {
  readonly location: Location;
}

const Transition: React.FC<Props> = ({ children, location }) => {
  const { vh } = useViewport();

  useEffect(() => {
    const { matches } = window.matchMedia('(display-mode: standalone)');

    document.body.style.setProperty('--vh', matches ? '100vh' : `${vh}px`);
  }, [vh]);

  const { isMainLayoutHidden } = useMenu();

  const TIMEOUT = 250;

  const getTransitionStyles = {
    entering: {
      position: 'absolute',
      opacity: 0,
    },
    entered: {
      transition: `opacity ${TIMEOUT}ms ease`,
      opacity: 1,
    },
    exiting: {
      transition: `all ${TIMEOUT}ms ease`,
      opacity: 0,
    },
  } as Record<TransitionStatus, React.CSSProperties>;

  return (
    <TransitionGroup
      className={sTrimmer(`layout ${isMainLayoutHidden ? 'hidden' : ''}`)}
    >
      <ReactTransition
        key={location.pathname}
        timeout={{ enter: TIMEOUT, exit: TIMEOUT }}
        unmountOnExit
      >
        {(status) => (
          <main style={{ ...getTransitionStyles[status] }}>{children}</main>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};

export default Transition;
