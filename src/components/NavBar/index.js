import React from 'react';

import './NavBar.scss';

const NavBar = ({ className = '', children }) => (
  <nav className={className}>
    <div>{children}</div>
  </nav>
);

export default NavBar;
