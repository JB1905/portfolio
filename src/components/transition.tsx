import React, { useEffect, ReactChild } from "react";
import {
  TransitionGroup,
  Transition as ReactTransition
} from "react-transition-group";
import { useViewport } from "react-viewport-hooks";

interface Props {
  offset: boolean;
  children: ReactChild | ReactChild[];
  location: Location;
}

const Transition = ({ offset, children, location }: Props) => {
  const { vh } = useViewport();

  useEffect(() => {
    const { matches } = window.matchMedia(`(display-mode: standalone)`);

    document.body.style.setProperty(`--vh`, matches ? `100vh` : `${vh}px`);
  }, [vh]);

  const timeout = 250;

  const getTransitionStyles: any = {
    entering: {
      position: `absolute`,
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
    <TransitionGroup className={`layout ${offset ? `hidden` : ``}`}>
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

export default Transition;
