import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Delay from 'react-delay';

import './menu.scss';

interface Props {
  onClick: () => void;
}

const Menu = ({ onClick }: Props) => (
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

export default Menu;
