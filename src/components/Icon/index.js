import React from 'react';
import Delay from 'react-delay';

import './Icon.css';

export const Icon = props => (
  <Delay wait={(props.index + 1) * 120 + 360}>
    <a
      href={props.src.url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon">
      <img
        src={props.src.image}
        alt={props.src.title}
        className="icon__image"
      />
    </a>
  </Delay>
);
