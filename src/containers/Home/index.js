import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Home.css';

export const Home = () => (
  <div className="home__container">
    <div className="home__title">
      <ReactCSSTransitionGroup
        transitionName="title"
        transitionAppearTimeout={0}
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}>
        <h1>Jakub Biesiada</h1>
      </ReactCSSTransitionGroup>

      <ReactCSSTransitionGroup
        transitionName="subtitle"
        transitionAppearTimeout={0}
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}>
        <h2>JavaScript Developer</h2>
      </ReactCSSTransitionGroup>
    </div>
  </div>
);
