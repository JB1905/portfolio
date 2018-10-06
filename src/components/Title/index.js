import React from 'react';
import Delay from 'react-delay';

import './Title.scss';

const Title = ({ value }) => (
  <Delay wait={100}>
    <h2 className="page__title">{value}</h2>
  </Delay>
);

export default Title;
