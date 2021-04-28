import React from 'react';
import Delay from 'react-delay';
import GraphImg from '@graphcms/react-image';

import './technology.scss';

// TODO replace types with generated types
interface Props {
  readonly image: string;
  readonly name: string;
  readonly index: number;
}

export const Technology = ({ image, name, index }: Props) => (
  <Delay wait={(index + 1) * 110 + 400}>
    <div className="technology__item">
      <GraphImg image={image} alt={name} className="technology__image" />

      <div className="technology__content">
        <p
          className="technology__name"
          dangerouslySetInnerHTML={{ __html: name.replace(/,/g, '<br />') }}
        />
      </div>
    </div>
  </Delay>
);
