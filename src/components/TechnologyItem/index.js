import React from 'react';
import Delay from 'react-delay';

import './TechnologyItem.css';

export const TechnologyItem = props => (
  <Delay wait={(props.index + 1) * 110 + 400}>
    <div className="technology__item">
      <img
        src={props.item.image}
        alt={props.item.name}
        className="technology__image"
      />
    </div>
  </Delay>
);
