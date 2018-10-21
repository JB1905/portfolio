import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './Mobile.scss';

export default class Mobile extends Component {
  toggleMenu = () => this.props.toggle();

  render() {
    const { link, title } = this.props;

    return (
      <li>
        <CSSTransitionGroup
          transitionName="list"
          transitionAppearTimeout={0}
          transitionAppear={true}
          transitionEnter={false}
          transitionLeave={false}
        >
          <NavLink exact to={link} onClick={this.toggleMenu}>
            {title}
          </NavLink>
        </CSSTransitionGroup>
      </li>
    );
  }
}
