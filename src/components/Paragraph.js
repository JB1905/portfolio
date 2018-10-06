import React from 'react';
import Delay from 'react-delay';

const Paragraph = ({ index, content }) => (
  <Delay wait={(index + 1) * 240 + 520}>
    <p>{content}</p>
  </Delay>
);

export default Paragraph;
