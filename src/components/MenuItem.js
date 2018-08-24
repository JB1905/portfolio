import React from 'react';
import { NavLink } from 'react-router-dom';

export const MenuItem = props => (
  <li>
    <NavLink exact to={props.link}>
      {props.title}
    </NavLink>
  </li>
);
