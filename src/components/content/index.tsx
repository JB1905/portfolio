import React from 'react';
import sTrimmer from 's-trimmer';

import './content.scss';

interface Props {
  readonly className: string;
}

const Content: React.FC<Props> = ({ children, className = '' }) => (
  <div className={sTrimmer(`content ${className}`)}>{children}</div>
);

export default Content;
