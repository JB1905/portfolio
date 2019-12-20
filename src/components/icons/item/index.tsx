import React from "react";
import PropTypes from "prop-types";
import Delay from "react-delay";

import "./icon.scss";

interface Props {
  item: {
    url: string;
    image: any;
  };
  index: number;
}

const Item = ({ item: { url, image }, index }: Props) => (
  <Delay wait={(index + 1) * 120 + 600}>
    <a href={url} target="_blank" rel="noopener noreferrer" className="icon">
      <img src={image.url} alt={url} className="icon__image" />
    </a>
  </Delay>
);

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    image: PropTypes.object
    // title: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Item;
