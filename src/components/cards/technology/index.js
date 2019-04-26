import React from 'react';
import Delay from 'react-delay';
import PropTypes from 'prop-types';

import './technology.scss';

export const Technology = ({ image, name, index }) => (
  <Delay wait={(index + 1) * 110 + 400}>
    <div className="technology__item">
      <img src={image} alt={name} className="technology__image" />
    </div>
  </Delay>
);

Technology.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number
};
