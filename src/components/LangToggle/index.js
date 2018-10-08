import React, { Component } from 'react';
import Delay from 'react-delay';

import './LangToggle.scss';

import { content } from '../../content';

export default class LangToggle extends Component {
  constructor() {
    super();

    let lang;

    if (localStorage.lang) {
      lang = localStorage.lang;
      this.switch(lang);
    } else {
      lang = content.getLanguage();
    }

    this.state = { lang };
  }

  lang = () => {
    if (this.state.lang === 'pl') {
      localStorage.setItem('lang', 'en');
      content.setLanguage('en');
      this.setState({ lang: 'en' });
    } else {
      localStorage.setItem('lang', 'pl');
      content.setLanguage('pl');
      this.setState({ lang: 'pl' });
    }
  };

  switch = lang => content.setLanguage(lang);

  render() {
    return (
      <Delay wait={600}>
        <div className="icon">
          <button className="language" onClick={this.lang}>
            {this.state.lang}
          </button>
        </div>
      </Delay>
    );
  }
}
