import React, { Component } from 'react';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { withRouter } from 'react-router-dom';

const fade = val =>
  spring(val, {
    stiffness: 300,
    damping: 30
  });

const transition = {
  atEnter: {
    opacity: 0
  },

  atLeave: {
    opacity: fade(0)
  },

  atActive: {
    opacity: fade(1)
  }
};

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(
        () => document.querySelector('.container').scrollTo(0, 0),
        300
      );
    }
  }

  render() {
    return (
      <AnimatedSwitch
        atEnter={transition.atEnter}
        atLeave={transition.atLeave}
        atActive={transition.atActive}
        className="switch-wrapper"
      >
        {this.props.children}
      </AnimatedSwitch>
    );
  }
}

export default withRouter(ScrollToTop);
