import * as React from 'react';
import sTrimmer from 's-trimmer';

import './content.scss';

interface Props {
  readonly children: React.ReactNode;
  readonly className: string;
}

const Content = ({ children, className = '' }: Props) => (
  <div className={sTrimmer(`content ${className}`)}>{children}</div>
);

export default Content;
