import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faBars,
  faEye
} from '@fortawesome/free-solid-svg-icons';

import Background from './components/Background';
import Menu from './components/Menu';
import Content from './components/Content';

import './App.scss';

import { content } from './content';

library.add(faPhone, faEnvelope, faBars, faEye);

export const LanguageContext = React.createContext();

export default function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [offset, setOffset] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.language || content.getLanguage()
  );

  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));

    return window.removeEventListener('resize', () =>
      setHeight(window.innerHeight)
    );
  }, []);

  content.setLanguage(language);

  const toggleLanguage = () => {
    if (language === 'pl') {
      localStorage.setItem('language', 'en');
      content.setLanguage('en');
      setLanguage('en');
    } else {
      localStorage.setItem('language', 'pl');
      content.setLanguage('pl');
      setLanguage('pl');
    }
  };

  return (
    <Router basename="/portfolio">
      <Background height={height} />

      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <Menu
          offset={ifOffset => setOffset(ifOffset)}
          height={height}
          update={language}
        />
      </LanguageContext.Provider>

      <Content offset={offset} height={height} />
    </Router>
  );
}
