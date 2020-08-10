import React from 'react';
import sTrimmer from 's-trimmer';

import Mobile from './item';

interface Props {
  readonly className: string;
  readonly menuItems: any[];
  readonly toggleMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({
  className = '',
  menuItems,
  toggleMenu,
}) => (
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
