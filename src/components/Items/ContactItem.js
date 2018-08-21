import React from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactItem = props => (
  <Delay wait={props.delay}>
    <div>
      <h1>
        <FontAwesomeIcon icon={props.icon} />
      </h1>

      <div>
        <h3>{props.title}:</h3>
        <a href={`${props.method}:${props.permalink}`}>{props.permalink}</a>
      </div>
    </div>
  </Delay>
);
