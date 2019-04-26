import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Desktop from './item';

import './desktop.scss';

const DesktopMenu = ({ className, content }) => (
  <CSSTransition in appear timeout={400} classNames="desktop-menu">
    <ul className={className}>
      {content.map((item, index) => (
        <Desktop key={index} link={item.link} title={item.title} />
      ))}
    </ul>
  </CSSTransition>
);

DesktopMenu.defaultProps = {
  className: ''
};

DesktopMenu.propTypes = {
  className: PropTypes.string,
  content: PropTypes.array
};

export default DesktopMenu;
