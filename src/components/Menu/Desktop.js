import React from 'react';

import DesktopMenuItem from '../DesktopMenuItem';

const DesktopMenu = ({ className, content }) => (
  <ul className={className}>
    {content.links.map((item, index) => (
      <DesktopMenuItem key={index} link={item.link} title={item.title} />
    ))}
  </ul>
);

export default DesktopMenu;
