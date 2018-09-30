import React from 'react';
import { NavLink } from 'react-router-dom';

export const DesktopMenuItem = ({ link, title }) => (
  <li>
    <NavLink exact to={link}>
      {title}
    </NavLink>
  </li>
);
