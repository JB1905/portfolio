import React from 'react';

import './navbar.scss';

const Bar: React.FC = ({ children }) => (
  <nav className="navbar">
    <div>{children}</div>
  </nav>
);

export default Bar;
