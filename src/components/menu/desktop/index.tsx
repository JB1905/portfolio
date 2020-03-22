import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Desktop from './item';

import './desktop.scss';

interface Props {
  className: string;
  content: [
    {
      title: string;
      link: string;
    }
  ];
}

const DesktopMenu = ({ className = '', content }: Props) => (
  <CSSTransition in appear timeout={1000} classNames="desktop-menu">
    <ul className={`desktop ${className}`}>
      {content.map((item, index: number) => (
        <Desktop key={index} link={item.link} title={item.title} />
      ))}
    </ul>
  </CSSTransition>
);

export default DesktopMenu;
