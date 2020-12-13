import React from 'react';
import sTrimmer from 's-trimmer';

import Mobile from './item';

import { MenuItem } from '../../../interfaces/MenuItem';

import './mobile.scss';

interface Props {
  readonly className: string;
  readonly menuItems: MenuItem[];
  toggleMenu: () => void;
}

const MobileMenu = ({ className = '', menuItems, toggleMenu }: Props) => (
  <nav className={sTrimmer(`mobile ${className}`)}>
    <ul>
      {menuItems.map((item, index) => (
        <Mobile
          key={index}
          link={item.link}
          title={item.title}
          toggle={toggleMenu}
        />
      ))}
    </ul>
  </nav>
);

export default MobileMenu;
