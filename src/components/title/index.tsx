import React from 'react';
import Delay from 'react-delay';

import { useTitleAnimation } from '../../hooks/useTitleAnimation';

import './title.scss';

const Title: React.FC = ({ children }) => {
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
