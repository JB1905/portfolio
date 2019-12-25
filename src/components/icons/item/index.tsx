import React from "react";
import Delay from "react-delay";

import "./icon.scss";

interface Props {
  item: {
    url: string;
    image: {
      url: string;
    };
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

export default Item;
