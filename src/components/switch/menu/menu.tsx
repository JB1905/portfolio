import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Delay from 'react-delay';
import { useTranslation } from 'react-i18next';

import './menu.scss';

interface Props {
  readonly onClick: () => void;
}

const Menu: React.FC<Props> = ({ onClick }) => {
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
