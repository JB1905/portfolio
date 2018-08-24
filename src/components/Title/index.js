import React from 'react';
import Delay from 'react-delay';

import './Title.css';

export const Title = props => (
  <Delay wait={100}>
    <h2 className="page__title">{props.value}</h2>
  </Delay>
);
