import React from 'react';
import Delay from 'react-delay';

import './icon.scss';

interface Props {
  // item: {
  //   url: string;
  //   image: {
  //     url: string;
  //   };
  // };
  readonly item: any;
  readonly index: number;
}

const Item: React.FC<Props> = ({ item: { url, image }, index }) => (
  <Delay wait={(index + 1) * 120 + 600}>
    <a href={url} target="_blank" rel="noopener noreferrer" className="icon">
      <img src={image.url} alt={url} className="icon__image" />
    </a>
  </Delay>
);

export default Item;
