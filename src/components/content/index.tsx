import React from 'react';

import './content.scss';

interface Props {
  className: string;
}

const Content: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`content ${className}`}>{children}</div>
);

export default Content;
