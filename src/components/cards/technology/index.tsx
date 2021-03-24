import React from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './technology.scss';

// TODO use generated types
interface Props {
  readonly image: string;
  readonly name: string;
  readonly url: string;
  readonly index: number;
}

export const Technology = ({ image, name, url, index }: Props) => (
  <Delay wait={(index + 1) * 110 + 400}>
    <div className="technology__item">
      <img src={image} alt={name} className="technology__image" />

      <div className="technology__content">
        <p
          className="technology__name"
          dangerouslySetInnerHTML={{ __html: name.replace(/,/g, '<br />') }}
        />

        <a href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
    </div>
  </Delay>
);
