import React from 'react';
import Delay from 'react-delay';

export const Paragraph = ({ index, content }) => (
  <Delay wait={(index + 1) * 240 + 520}>
    <p>{content}</p>
  </Delay>
);
