import React from 'react';
import Delay from 'react-delay';
import { Link } from 'react-router-dom';

export const ProjectItem = props => (
  <Delay wait={(props.index + 1) * 190 + 280}>
    <Link to={`projects`} className={props.className}>
      <img src={props.image.image} alt="" />
    </Link>
  </Delay>
);
