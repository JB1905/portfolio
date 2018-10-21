import React from 'react';
import { NavLink } from 'react-router-dom';

const Desktop = ({ link, title }) => (
  <li>
    <NavLink exact to={link}>
      {title}
    </NavLink>
  </li>
);

export default Desktop;
