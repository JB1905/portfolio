import React from 'react';
import Delay from 'react-delay';
import { useTranslation } from 'react-i18next';

import { Language as LanguageName } from '../../../enums/Language';

const Language: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Delay wait={600}>
      <div className="icon">
        <button
          type="button"
          className="language"
          aria-label={t('labels.toggle.language')}
          onClick={() =>
            i18n.changeLanguage(
              i18n.language === LanguageName.Polish
                ? LanguageName.English
                : LanguageName.Polish
            )
          }
        >
          {i18n.language}
        </button>
      </div>
    </Delay>
  );
};

export default Language;
