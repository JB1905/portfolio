import React from 'react';
import sTrimmer from 's-trimmer';

import Mobile from './item';

import './mobile.scss';

interface Props {
  readonly className: string;
  readonly menuItems: any[]; // TODO fix type
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
