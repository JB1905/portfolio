import React from "react";
import Delay from "react-delay";
import { CSSTransition } from "react-transition-group";

import "./home.scss";

const Home = () => (
  <Delay wait={280}>
    <div className="home__container">
      <div className="home__title">
        <CSSTransition in appear timeout={2000} classNames="title">
          <h1>Jakub Biesiada</h1>
        </CSSTransition>

        <CSSTransition in appear timeout={2000} classNames="subtitle">
          <h2>JavaScript Developer</h2>
        </CSSTransition>
      </div>
    </div>
  </Delay>
);

export default Home;
