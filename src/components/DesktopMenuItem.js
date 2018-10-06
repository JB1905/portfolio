import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopMenuItem = ({ link, title }) => (
  <li>
    <NavLink exact to={link}>
      {title}
    </NavLink>
  </li>
);

export default DesktopMenuItem;
