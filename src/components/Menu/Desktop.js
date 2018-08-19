import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DesktopMenu extends Component {
  render() {
    return (
      <ul className={this.props.className}>
        <li>
          <NavLink exact to="/">
            Start
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">O mnie</NavLink>
        </li>

        <li>
          <NavLink to="/technologies">Technologie</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projekty</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    );
  }
}
