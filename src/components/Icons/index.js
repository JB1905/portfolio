import React from 'react';

import Icon from '../Icon';
import LangToggle from '../LangToggle';

import './Icons.scss';

import { ICONS } from '../../content/icons';

const Icons = () => (
  <div className="icons">
    <LangToggle />

    {ICONS.map((icon, index) => (
      <Icon key={index} src={icon} index={index} />
    ))}
  </div>
);

export default Icons;
