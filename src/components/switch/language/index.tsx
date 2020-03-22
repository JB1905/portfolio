import React from 'react';
import Delay from 'react-delay';

import { useLanguages } from '../../../hooks/useLanguages';

import './language.scss';

const Language = () => {
  const { language, toggleLanguage } = useLanguages();

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

export default Language;
