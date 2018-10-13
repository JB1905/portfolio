import React from 'react';
import Delay from 'react-delay';

import { LanguageContext } from '../../App';

import './LangToggle.scss';

const LangToggle = () => (
  <LanguageContext.Consumer>
    {({ language, setLanguage }) => (
      <Delay wait={600}>
        <div className="icon">
          <button className="language" onClick={() => setLanguage()}>
            {language}
          </button>
        </div>
      </Delay>
    )}
  </LanguageContext.Consumer>
);

export default LangToggle;
