import React from 'react';
import Delay from 'react-delay';

export const TechnologyItem = props => (
  <Delay wait={(props.index + 1) * 110 + 400}>
    <div>
      <img src={props.data.image} alt={props.data.technology} />
    </div>
  </Delay>
);
