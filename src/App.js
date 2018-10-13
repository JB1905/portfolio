import React, { Component } from 'react';
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

export default class App extends Component {
  constructor() {
    super();

    let language;

    if (localStorage.language) {
      language = localStorage.language;
      this.switch(language);
    } else {
      language = content.getLanguage();
    }

    this.state = {
      height: null,
      offset: false,
      language,
      setLanguage: this.toggleLanguage
    };
  }

  componentDidMount() {
    this.setHeight();

    window.addEventListener('resize', this.setHeight);
  }

  toggleLanguage = () => {
    if (this.state.language === 'pl') {
      localStorage.setItem('language', 'en');
      content.setLanguage('en');
      this.setState({ language: 'en' });
    } else {
      localStorage.setItem('language', 'pl');
      content.setLanguage('pl');
      this.setState({ language: 'pl' });
    }
  };

  switch = language => content.setLanguage(language);
  setOffset = offset => this.setState({ offset });
  setHeight = () => this.setState({ height: window.innerHeight });

  render() {
    return (
      <Router basename="/portfolio">
        <>
          <Background {...this.state} />

          <LanguageContext.Provider value={this.state}>
            <Menu offset={this.setOffset} height={this.state.height} />
          </LanguageContext.Provider>

          <Content {...this.state} />
        </>
      </Router>
    );
  }
}
