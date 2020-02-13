import React, { useEffect } from "react";
import {
  TransitionGroup,
  Transition as ReactTransition
} from "react-transition-group";
import { useViewport } from "react-viewport-hooks";

import { useMenu } from "../hooks/useMenu";
import { useRouterTransition } from "../hooks/useRouterTransition";

import { WrapperProps } from "../interfaces/WrapperProps";

interface Props extends WrapperProps {
  location: Location;
}

const Transition = ({ children, location }: Props) => {
  const { vh } = useViewport();

  const { offset } = useMenu();

  const { timeout, getTransitionStyles } = useRouterTransition();

  useEffect(() => {
    const { matches } = window.matchMedia("(display-mode: standalone)");

    document.body.style.setProperty("--vh", matches ? "100vh" : `${vh}px`);
  }, [vh]);

  return (
    <TransitionGroup className={`layout ${offset ? "hidden" : ""}`}>
      <ReactTransition
        key={location.pathname}
        timeout={{ enter: timeout, exit: timeout }}
      >
        {status => (
          <main style={{ ...getTransitionStyles[status] }}>{children}</main>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};

export default Transition;
