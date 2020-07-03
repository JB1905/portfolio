import React from 'react';
import Delay from 'react-delay';

import './technology.scss';

interface Props {
  readonly image: string;
  readonly name: string;
  readonly index: number;
}

export const Technology: React.FC<Props> = ({ image, name, index }) => (
  <Delay wait={(index + 1) * 110 + 400}>
    <div className="technology__item">
      <div>
        <img src={image} alt={name} className="technology__image" />
      </div>

      <div className="technology__content">
        <p className="technology__name">{name.replace(/,/g, '\n')}</p>
      </div>
    </div>
  </Delay>
);
