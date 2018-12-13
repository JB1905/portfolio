import React from 'react';
import Delay from 'react-delay';

import { LanguageContext } from '../../App';

import './LangToggle.scss';

const LangToggle = () => (
  <LanguageContext.Consumer>
    {({ language, toggleLanguage }) => (
      <Delay wait={600}>
        <div className="icon">
          <button className="language" onClick={toggleLanguage}>
            {language}
          </button>
        </div>
      </Delay>
    )}
  </LanguageContext.Consumer>
);

export default LangToggle;
