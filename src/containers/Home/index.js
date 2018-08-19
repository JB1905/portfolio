import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <div className="home__title">
          <ReactCSSTransitionGroup
            transitionName="title"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}>
            <h1>
              Jakub<br />Biesiada
            </h1>
          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup
            transitionName="subtitle"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}>
            <h2>JavaScript Developer</h2>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}
