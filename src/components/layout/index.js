import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Normalize from 'react-normalize';
import localStorage from 'localStorage';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faBars,
  faEye
} from '@fortawesome/free-solid-svg-icons';

import { LanguageContext } from 'context';
import Menu from 'components/menu';
import Transition from 'components/transition';
import Background from 'components/background';
import SEO from 'components/seo';

import './global.scss';
import './animations.scss';
import './layout.scss';

library.add(faPhone, faEnvelope, faBars, faEye);

const Layout = ({ children, location }) => {
  const [offset, setOffset] = useState(false);
  const [language, setLanguage] = useState(localStorage.language || 'pl');

  const toggleLanguage = () => {
    if (language === 'pl') {
      localStorage.setItem('language', 'en');
      setLanguage('en');
    } else {
      localStorage.setItem('language', 'pl');
      setLanguage('pl');
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              author
            }
          }
        }
      `}
      render={data => (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          <SEO
            title={data.site.siteMetadata.author}
            keywords={[
              'front end',
              'biesiada',
              'jakub',
              'javascript',
              'developer',
              'react'
            ]}
            lang={language}
          />

          <Normalize />

          <Menu offset={ifOffset => setOffset(ifOffset)} />

          <Transition location={location} offset={offset}>
            {children}
          </Transition>

          <Background />
        </LanguageContext.Provider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
