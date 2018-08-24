import React from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TechnologyItem.css';

export const TechnologyItem = props => {
  let stars = [];
  for (let i = 0; i < props.item.stars; i++) {
    stars.push(<FontAwesomeIcon className="star" icon="star" key={i} />);
  }

  return (
    <Delay wait={(props.index + 1) * 110 + 400}>
      <div className="technology__item">
        <img
          src={props.item.image}
          alt={props.item.name}
          className="technology__image"
        />

        <div className="technology__content">
          <div className="technology__about">
            <h3>{props.item.name}</h3>
            <div className="stars">{stars}</div>
          </div>
        </div>
      </div>
    </Delay>
  );
};
