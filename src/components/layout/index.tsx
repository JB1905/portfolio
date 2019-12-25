import React, { useState, ReactChild } from "react";
import { StaticQuery, graphql } from "gatsby";
import Normalize from "react-normalize";
import localStorage from "localStorage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faBars,
  faEye
} from "@fortawesome/free-solid-svg-icons";

import Menu from "../menu";
import Transition from "../transition";
import Background from "../background";
import SEO from "../seo";

import { LanguageContext } from "../../context";

import "./global.scss";
import "./animations.scss";
import "./layout.scss";

library.add(faPhone, faEnvelope, faBars, faEye);

interface Props {
  children: ReactChild | ReactChild[];
  location: Location;
}

const Layout = ({ children, location }: Props) => {
  const [offset, setOffset] = useState(false);
  const [language, setLanguage] = useState(localStorage.language || `pl`);

  const toggleLanguage = () => {
    if (language === `pl`) {
      localStorage.setItem(`language`, `en`);
      setLanguage(`en`);
    } else {
      localStorage.setItem(`language`, `pl`);
      setLanguage(`pl`);
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              author
              description
            }
          }
        }
      `}
      render={data => (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          <SEO
            title={data.site.siteMetadata.author}
            description={data.site.siteMetadata.description}
            lang={language}
            keywords={[
              `front end`,
              `biesiada`,
              `jakub`,
              `javascript`,
              `developer`,
              `react`
            ]}
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

export default Layout;
