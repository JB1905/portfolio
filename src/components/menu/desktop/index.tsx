import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Desktop from './item';

import './desktop.scss';

interface Props {
  readonly className: string;
  // content: [
  //   {
  //     title: string;
  //     link: string;
  //   }
  // ];
  readonly content: any[];
}

const DesktopMenu: React.FC<Props> = ({ className = '', content }) => (
  <CSSTransition in appear timeout={1000} classNames="desktop-menu">
    <ul className={`desktop ${className}`}>
      {content.map((item, index) => (
        <Desktop key={index} link={item.link} title={item.title} />
      ))}
    </ul>
  </CSSTransition>
);

export default DesktopMenu;
