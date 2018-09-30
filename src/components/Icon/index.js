import React from 'react';
import Delay from 'react-delay';

import './Icon.css';

export const Icon = ({ index, src }) => (
  <Delay wait={(index + 1) * 120 + 360}>
    <a
      href={src.url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon"
    >
      <img src={src.image} alt={src.title} className="icon__image" />
    </a>
  </Delay>
);
