import React, { useRef, useEffect } from 'react';
import sTrimmer from 's-trimmer';

import Desktop from './item';

import { fadeIn } from '../../../animations/fadeIn';

import './desktop.scss';

interface Props {
  readonly className: string;
  readonly menuItems: any[];
}

const DesktopMenu: React.FC<Props> = ({ className = '', menuItems }) => {
  const menu = useRef(null);

  useEffect(() => {
    fadeIn(menu.current);
  }, []);

  return (
    <ul className={sTrimmer(`desktop ${className}`)} ref={menu}>
      {menuItems.map((item, index) => (
        <Desktop key={index} link={item.link} title={item.title} />
      ))}
    </ul>
  );
};

export default DesktopMenu;
