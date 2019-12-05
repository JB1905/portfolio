import React, { useState, useEffect, useContext, useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Icons from "components/icons";
import { MenuSwitch } from "components/switch";
import { LanguageContext } from "context";
import DesktopMenu from "./desktop";
import MobileMenu from "./mobile";

import "./menu.scss";

const Menu = ({ offset }) => {
  const ref = useRef();

  const { language } = useContext(LanguageContext);

  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    offset(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    offset(false);
  };

  const toggleMenu = () => {
    if (isOpen) closeMenu();
    else openMenu();
  };

  useEffect(() => {
    const onResize = () => {
      const breakPoint = ref.current.offsetHeight > 74;

      setIsMobile(breakPoint);
      offset(breakPoint ? isOpen : false);
    };

    onResize();

    window.addEventListener(`resize`, onResize);

    return () => window.removeEventListener(`resize`, onResize);
  }, [isOpen, language, offset]);

  return (
    <StaticQuery
      query={graphql`
        {
          pl: languagesJson(lang: { eq: "pl" }) {
            menu {
              title
              link
            }
          }
          en: languagesJson(lang: { eq: "en" }) {
            menu {
              title
              link
            }
          }
        }
      `}
      render={data => (
        <>
          <header>
            <Icons />

            <nav className="nav" ref={ref}>
              <DesktopMenu
                className={`${isMobile ? `hidden` : ``}`}
                content={data[language].menu}
              />

              {isMobile && <MenuSwitch onClick={toggleMenu} />}
            </nav>
          </header>

          <MobileMenu
            className={`${isMobile ? `` : `hidden`} ${isOpen ? `opened` : ``}`}
            content={data[language].menu}
            toggleMenu={closeMenu}
          />
        </>
      )}
    />
  );
};

Menu.propTypes = {
  offset: PropTypes.func.isRequired
};

export default Menu;
