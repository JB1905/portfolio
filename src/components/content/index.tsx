import React from 'react';

import { WrapperProps } from '../../interfaces/WrapperProps';

import './content.scss';

interface Props extends WrapperProps {
  className: string;
}

const Content = ({ children, className = '' }: Props) => (
  <div className={`content ${className}`}>{children}</div>
);

export default Content;
