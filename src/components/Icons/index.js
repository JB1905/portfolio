import React from 'react';

import LangToggle from '../LangToggle';
import { IconItem } from '../Items';

import './Icons.scss';

import { ICONS } from '../../content/icons';

const Icons = () => (
  <div className="icons">
    <LangToggle />

    {ICONS.map((icon, index) => (
      <IconItem key={index} src={icon} index={index} />
    ))}
  </div>
);

export default Icons;
