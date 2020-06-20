import React, { useRef, useEffect } from 'react';

import { bounceIn } from '../../../animations/bounceIn';

import './icon.scss';

interface Props {
  readonly item: any;
  readonly index: number;
}

const Item: React.FC<Props> = ({ item: { url, image }, index }) => {
  const icon = useRef(null);

  useEffect(() => {
    bounceIn(icon.current, (index + 1) * 120 + 600);
  }, []);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon"
      ref={icon}
    >
      <img src={image.url} alt={url} className="icon__image" />
    </a>
  );
};

export default Item;
