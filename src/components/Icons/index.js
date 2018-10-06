import React from 'react';

import Icon from '../Icon';

import './Icons.scss';

import { ICONS } from '../../content/icons';

const Icons = () => (
  <div className="icons">
    {ICONS.map((icon, index) => (
      <Icon key={index} src={icon} index={index} />
    ))}
  </div>
);

export default Icons;
