import React from 'react';

import './View.scss';

const View = ({ className = '', children }) => (
  <div className={`view ${className}`}>{children}</div>
);

export default View;
