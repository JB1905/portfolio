import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MobileMenuItem extends Component {
  toggleMenu = () => this.props.toggle();

  render() {
    return (
      <li>
        <ReactCSSTransitionGroup
          transitionName="list"
          transitionAppearTimeout={0}
          transitionAppear={true}
          transitionEnter={false}
          transitionLeave={false}>
          <NavLink exact to={this.props.link} onClick={this.toggleMenu}>
            {this.props.title}
          </NavLink>
        </ReactCSSTransitionGroup>
      </li>
    );
  }
}
