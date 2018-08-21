import React from 'react';
import Delay from 'react-delay';

export const Paragraph = props => (
  <Delay wait={(props.index + 1) * 240 + 520}>
    <p>{props.content}</p>
  </Delay>
);
