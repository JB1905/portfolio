import React from 'react';

import { MobileMenuItem } from '../Items';

const MobileMenu = ({ height, content, toggleMenu }) => (
  <div style={{ height }}>
    <ul>
      {content.links.map((item, index) => (
        <MobileMenuItem
          key={index}
          link={item.link}
          title={item.title}
          toggle={toggleMenu}
        />
      ))}
    </ul>
  </div>
);

export default MobileMenu;
