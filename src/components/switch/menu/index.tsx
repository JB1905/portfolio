import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { bounceIn } from '../../../animations/bounceIn';

import './menu.scss';

interface Props {
  readonly onClick: () => void;
}

const Menu: React.FC<Props> = ({ onClick }) => {
  const menuToggle = useRef(null);

  useEffect(() => {
    bounceIn(menuToggle.current, 200);
  }, []);

  return (
    <button
      type="button"
      className="menu"
      aria-label="Toggle mobile menu"
      onClick={onClick}
      ref={menuToggle}
    >
      <FontAwesomeIcon icon="bars" />
    </button>
  );
};

export default Menu;
