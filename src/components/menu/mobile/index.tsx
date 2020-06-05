import React from 'react';

import Mobile from './item';

import './mobile.scss';

interface Props {
  readonly className: string;
  // content: [
  //   {
  //     title: string;
  //     link: string;
  //   }
  // ];
  readonly content: any[];
  readonly toggleMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({
  className = '',
  content,
  toggleMenu,
}) => (
  <nav className={`mobile ${className}`}>
    <ul>
      {content.map((item, index) => (
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
