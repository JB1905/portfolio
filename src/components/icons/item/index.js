import React from 'react';
import Delay from 'react-delay';
import PropTypes from 'prop-types';

import './icon.scss';

const Item = ({ item: { url, image }, index }) => (
  <Delay wait={(index + 1) * 120 + 600}>
    <a href={url} target="_blank" rel="noopener noreferrer" className="icon">
      <img src={image.url} alt={url} className="icon__image" />
    </a>
  </Delay>
);

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string
  }),
  index: PropTypes.number
};

export default Item;
