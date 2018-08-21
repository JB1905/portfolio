import React from 'react';
import Delay from 'react-delay';
import { Link } from 'react-router-dom';

import './Item.css';

export const TechnologyItem = props => (
  <Delay wait={(props.index + 1) * 110 + 400}>
    <div>
      <img src={props.data.image} alt={props.data.technology} />
    </div>
  </Delay>
);

export const ProjectItem = props => (
  <Delay wait={(props.index + 1) * 190 + 280}>
    <Link to={`projects`} className={props.className}>
      <img src={props.image.image} alt="" />
    </Link>
  </Delay>
);
