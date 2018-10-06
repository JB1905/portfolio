import React from 'react';

import './NavBar.scss';

const NavBar = ({ children }) => (
  <nav>
    <div>{children}</div>
  </nav>
);

export default NavBar;
