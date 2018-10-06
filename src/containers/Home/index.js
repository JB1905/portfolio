import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './Home.scss';

const Home = () => (
  <div className="home__container">
    <div className="home__title">
      <CSSTransitionGroup
        transitionName="title"
        transitionAppearTimeout={0}
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}
      >
        <h1>Jakub Biesiada</h1>
      </CSSTransitionGroup>

      <CSSTransitionGroup
        transitionName="subtitle"
        transitionAppearTimeout={0}
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}
      >
        <h2>JavaScript Developer</h2>
      </CSSTransitionGroup>
    </div>
  </div>
);

export default Home;
