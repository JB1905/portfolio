import React from 'react';

import Mobile from './item';

import './mobile.scss';

interface Props {
  className: string;
  content: [
    {
      title: string;
      link: string;
    }
  ];
  toggleMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({
  className = '',
  content,
  toggleMenu,
}) => (
  <ul className={`mobile ${className}`}>
    {content.map((item, index: number) => (
      <Mobile
        key={index}
        link={item.link}
        title={item.title}
        toggle={toggleMenu}
      />
    ))}
  </ul>
);

export default MobileMenu;
