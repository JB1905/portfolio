import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Delay from 'react-delay';

import './menu.scss';

const Menu = ({ onClick }) => (
  <Delay wait={200}>
    <button
      type="button"
      className="menu"
      aria-label="Toggle mobile menu"
      onClick={onClick}
    >
      <FontAwesomeIcon icon="bars" />
    </button>
  </Delay>
);

Menu.propTypes = {
  onClick: PropTypes.func
};

export default Menu;
