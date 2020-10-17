import * as React from 'react';

import './navbar.scss';

interface Props {
  readonly children: React.ReactNode;
}

const Bar = ({ children }: Props) => (
  <nav className="navbar">
    <div>{children}</div>
  </nav>
);

export default Bar;
