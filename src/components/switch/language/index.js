import React, { useContext } from 'react';
import Delay from 'react-delay';

import { Store } from '../../../layouts';

import './language.scss';

export default () => {
  const { language, toggleLanguage } = useContext(Store);

  return (
    <Delay wait={600}>
      <div className="icon">
        <button
          type="button"
          className="language"
          aria-label="Switch language"
          onClick={toggleLanguage}
        >
          {language}
        </button>
      </div>
    </Delay>
  );
};
