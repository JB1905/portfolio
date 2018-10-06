import React from 'react';
import Delay from 'react-delay';

import './TechnologyItem.scss';

const TechnologyItem = ({ index, item }) => (
  <Delay wait={(index + 1) * 110 + 400}>
    <div className="technology__item">
      <img src={item.image} alt={item.name} className="technology__image" />
    </div>
  </Delay>
);

export default TechnologyItem;
