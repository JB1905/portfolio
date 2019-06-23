import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Mobile from './item';

import './mobile.scss';

const MobileMenu = ({ height, content, toggleMenu }) => (
  <div className="mobile" style={{ height }}>
    <CSSTransition in appear classNames="list" timeout={1000}>
      <ul>
        {content.map((item, index) => (
          <Mobile
            key={index}
            index={index}
            link={item.link}
            title={item.title}
            toggle={toggleMenu}
          />
        ))}
      </ul>
    </CSSTransition>
  </div>
);

MobileMenu.propTypes = {
  height: PropTypes.number.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default MobileMenu;
