import React, { useContext } from 'react';
import Delay from 'react-delay';

import { LanguageContext } from 'context';

import './language.scss';

const Language = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

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
