import React from 'react';
import Delay from 'react-delay';

import { useTitleAnimation } from '../../hooks/useTitleAnimation';

import { WrapperProps } from '../../interfaces/WrapperProps';

import './title.scss';

const Title = ({ children }: WrapperProps) => {
  const { opacity, scale } = useTitleAnimation();

  return (
    <Delay wait={100}>
      <h2
        className="page__title"
        style={{ opacity, transform: `scale(${scale})` }}
      >
        {children}
      </h2>
    </Delay>
  );
};

export default Title;
