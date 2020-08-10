import React from 'react';

const Bar: React.FC = ({ children }) => (
  <nav className="navbar">
    <div>{children}</div>
  </nav>
);

export default Bar;
