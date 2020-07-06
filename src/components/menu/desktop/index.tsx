import React from 'react';
import { CSSTransition } from 'react-transition-group';
import sTrimmer from 's-trimmer';

import Desktop from './item';

import { MenuItem } from '../../../interfaces/MenuItem';

import './desktop.scss';

interface Props {
  readonly className: string;
  readonly menuItems: MenuItem[];
}

const DesktopMenu: React.FC<Props> = ({ className = '', menuItems }) => (
  <CSSTransition in appear timeout={1000} classNames="desktop-menu">
    <ul className={sTrimmer(`desktop ${className}`)}>
      {menuItems.map((item, index) => (
        <Desktop key={index} link={item.link} title={item.title} />
      ))}
    </ul>
  </CSSTransition>
);

export default DesktopMenu;
