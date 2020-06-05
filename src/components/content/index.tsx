import React from 'react';

import './content.scss';

interface Props {
  readonly className: string;
}

const Content: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`content ${className}`}>{children}</div>
);

export default Content;
