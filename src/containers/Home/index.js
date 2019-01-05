import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Home.scss';

const Home = () => (
  <div className="home__container">
    <div className="home__title">
      <CSSTransition in appear timeout={750} classNames="title">
        <h1>Jakub Biesiada</h1>
      </CSSTransition>

      <CSSTransition in appear timeout={950} classNames="subtitle">
        <h2>JavaScript Developer</h2>
      </CSSTransition>
    </div>
  </div>
);

export default Home;
