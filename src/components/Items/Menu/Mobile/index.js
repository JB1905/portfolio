import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Mobile.scss';

const Mobile = ({ link, toggle, title }) => (
  <li>
    <CSSTransition in appear classNames="list" timeout={400}>
      <NavLink exact to={link} onClick={toggle}>
        {title}
      </NavLink>
    </CSSTransition>
  </li>
);

export default Mobile;
