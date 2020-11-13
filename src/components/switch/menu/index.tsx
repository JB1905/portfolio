import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import Delay from 'react-delay';

import './menu.scss';

interface Props {
  onClick: () => void;
}

const Menu = ({ onClick }: Props) => {
  const { t } = useTranslation();

  return (
    <Delay wait={200}>
      <button
        type="button"
        className="menu"
        aria-label={t('labels.toggle.menu')}
        onClick={onClick}
      >
        <FontAwesomeIcon icon="bars" />
      </button>
    </Delay>
  );
};

export default Menu;
