import React from 'react';
import Delay from 'react-delay';

export const Title = props => (
  <Delay wait={100}>
    <h2 className="page__title">{props.value}</h2>
  </Delay>
);
