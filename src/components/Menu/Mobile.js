import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MobileMenu extends Component {
  toggleMenu = () => this.props.toggleMenu();

  render() {
    return (
      <div>
        <ul>
          <li>
            <ReactCSSTransitionGroup
              transitionName="list"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}>
              <NavLink exact to="/" onClick={this.toggleMenu}>
                Start
              </NavLink>
            </ReactCSSTransitionGroup>
          </li>

          <li>
            <ReactCSSTransitionGroup
              transitionName="list"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}>
              <NavLink to="/about" onClick={this.toggleMenu}>
                O mnie
              </NavLink>
            </ReactCSSTransitionGroup>
          </li>

          <li>
            <ReactCSSTransitionGroup
              transitionName="list"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}>
              <NavLink to="/technologies" onClick={this.toggleMenu}>
                Technologie
              </NavLink>
            </ReactCSSTransitionGroup>
          </li>

          <li>
            <ReactCSSTransitionGroup
              transitionName="list"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}>
              <NavLink to="/projects" onClick={this.toggleMenu}>
                Projekty
              </NavLink>
            </ReactCSSTransitionGroup>
          </li>

          <li>
            <ReactCSSTransitionGroup
              transitionName="list"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}>
              <NavLink to="/contact" onClick={this.toggleMenu}>
                Kontakt
              </NavLink>
            </ReactCSSTransitionGroup>
          </li>
        </ul>
      </div>
    );
  }
}
