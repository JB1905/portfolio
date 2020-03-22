import React from 'react';

import { WrapperProps } from '../../../interfaces/WrapperProps';

import './navbar.scss';

const Bar = ({ children }: WrapperProps) => (
  <nav className="navbar">
    <div>{children}</div>
  </nav>
);

export default Bar;
