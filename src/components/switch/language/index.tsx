import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { bounceIn } from '../../../animations/bounceIn';

import './language.scss';

const Language: React.FC = () => {
  const { i18n } = useTranslation();

  const languageToggle = useRef(null);

  useEffect(() => {
    bounceIn(languageToggle.current, 600);
  }, []);

  return (
    <div className="icon" ref={languageToggle}>
      <button
        type="button"
        className="language"
        aria-label="Switch language"
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')
        }
      >
        {i18n.language}
      </button>
    </div>
  );
};

export default Language;
