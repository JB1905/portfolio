import React from 'react';
import Delay from 'react-delay';

import './Icons.css';

export const Icons = props => (
  <Delay wait={(props.index + 1) * 120 + 360}>
    <a href={props.src.url} target="_blank" rel="noopener noreferrer">
      <img src={props.src.image} alt="Social media" />
    </a>
  </Delay>
);
