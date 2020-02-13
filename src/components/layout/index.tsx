import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Normalize from "react-normalize";
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

import { LanguageProvider } from "../../providers/LanguageContext";
import { MenuProvider } from "../../providers/MenuContext";

import { WrapperProps } from "../../interfaces/WrapperProps";

import "./global.scss";
import "./animations.scss";
import "./layout.scss";

library.add(faPhone, faEnvelope, faBars, faEye);

interface Props extends WrapperProps {
  location: Location;
}

const Layout = ({ children, location }: Props) => (
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
      <LanguageProvider>
        <MenuProvider>
          <SEO
            title={data.site.siteMetadata.author}
            description={data.site.siteMetadata.description}
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

          <Menu />

          <Transition location={location}>{children}</Transition>

          <Background />
        </MenuProvider>
      </LanguageProvider>
    )}
  />
);

export default Layout;
